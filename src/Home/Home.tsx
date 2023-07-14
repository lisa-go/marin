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
        <button onClick={() => dispatch(change('main'))}>Get Started</button>
      </div>
    </div>
  );
}
