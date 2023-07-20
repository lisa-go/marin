import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';
import './editor.scss';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { editCurrentFile } from '../redux/slices/filesSlice';

export default function Editor() {
  const currentFile = useSelector(
    (state: RootState) => state.files.currentFile
  );
  const dispatch = useDispatch();

  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    if (currentFile?.content) {
      const clean = DOMPurify.sanitize(
        marked.parse(
          currentFile.content
            .toString()
            .replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''),
          { headerIds: false, mangle: false }
        )
      );
      setHtmlContent(clean);
    }
  }, [currentFile]);

  useEffect(() => {
    const container = document.querySelector('#editor-text');
    if (container) container.innerHTML = htmlContent;
  }, [htmlContent]);

  return (
    <div
      id='editor'
      className='container'>
      <div id='editor-container'>
        <div
          id='editor-text'
          contentEditable='true'
          onInput={(e) =>
            dispatch(
              editCurrentFile({
                id: currentFile ? currentFile.id : '',
                content: e.currentTarget.innerHTML,
              })
            )
          }></div>
      </div>
    </div>
  );
}
