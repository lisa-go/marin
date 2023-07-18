import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useEffect } from 'react';

export default function Editor() {
  const currentFile = useSelector(
    (state: RootState) => state.files.currentFile
  );

  useEffect(() => {
    console.log(currentFile);
  }, [currentFile]);

  return (
    <div
      id='editor'
      className='container'>
      <div id='editor-container'>
        <div
          id='editor-text'
          contentEditable={true}>
          {currentFile?.toString()}
        </div>
      </div>
    </div>
  );
}
