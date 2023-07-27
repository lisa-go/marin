import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect, useState } from 'react';
import './editor.scss';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import { editCurrentFile } from '../redux/slices/filesSlice';
import Toolbar from './Toolbar';

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

  /* editing */
  const tool = useSelector((state: RootState) => state.tool.current);

  const [text, setText] = useState<string | null>(null);
  function getText() {
    const currentText = window.getSelection()?.toString();
    if (currentText) setText(currentText);
    else setText(null);
  }

  const [node, setNode] = useState<Element | null>(null);
  function getNode(e: EventTarget) {
    const currentNode = e as Element;
    setNode(currentNode);
  }

  function changeNode(node: Element, text: string | null, tool: string) {
    const parser = new DOMParser();

    switch (tool) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
        node.parentNode?.replaceChild(
          parser
            .parseFromString(
              `<${tool}>${node.textContent}</${tool}>`,
              'text/html'
            )
            .querySelector('body')?.firstChild as Node,
          node
        );
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    console.log(tool);
    console.log(node);
    console.log(text);
    if (node && tool) changeNode(node, text, tool);
  }, [tool]);

  useEffect(() => {
    console.log(text);
  }, [text]);

  /*   useEffect(() => {
    console.log(selection);
  }, [selection]); */

  return (
    <div
      id='editor'
      className='container'>
      <div id='editor-container'>
        <Toolbar />
        <div
          id='editor-text'
          contentEditable='true'
          onMouseDown={(e) => getNode(e.target)}
          onMouseUp={getText}
          onChange={(e) =>
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
