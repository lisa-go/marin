import './home.scss';
import logo from '../assets/icon.png';
import { useDispatch } from 'react-redux';
import { change } from '../redux/slices/pageSlice';
import { VscHistory } from 'react-icons/vsc';
import { LuFolderOpen } from 'react-icons/lu';
import { IoDocumentOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function Home() {
  const dispatch = useDispatch();

  /* put this in redux store later */
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files === null) return;

    const fileReader = new FileReader();
    fileReader.readAsText(event.target.files[0], 'UTF-8');
    fileReader.onload = (e) => {
      if (e.target) {
        console.log('e.target.result', e.target.result);
        setFile(e.target.result);
      }
    };

    dispatch(change('editor'));
  }

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div
      id='home'
      className='container'>
      <div id='home-content-container'>
        <img
          src={logo}
          alt='logo'
        />
        <div id='home-text-container'>
          <h1>MARIN</h1>
          <h3>a markdown editor</h3>
        </div>
        <div id='home-btn-container'>
          <button
            id='recent-btn'
            onClick={() => dispatch(change('recent'))}>
            <VscHistory />
            <span>View Recents</span>
          </button>

          <label
            htmlFor='file-btn'
            className='custom-file-upload'>
            <LuFolderOpen />
            Import File
          </label>
          <input
            id='file-btn'
            type='file'
            accept='.md'
            onChange={(e) => handleFile(e)}
          />
          <button
            id='new-btn'
            onClick={() => dispatch(change('editor'))}>
            <IoDocumentOutline />
            <span>Create New</span>
          </button>
        </div>
      </div>
    </div>
  );
}
