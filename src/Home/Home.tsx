import './home.scss';
import logo from '../assets/icon.png';
import { useDispatch } from 'react-redux';
import { change } from '../redux/slices/pageSlice';

export default function Home() {
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(change('main'))}>View Recents</button>
          <button onClick={() => dispatch(change('main'))}>Import File</button>
          <button onClick={() => dispatch(change('main'))}>Create New</button>
        </div>
      </div>
    </div>
  );
}
