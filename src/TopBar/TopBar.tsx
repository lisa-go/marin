import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './topbar.scss';
import logo from '../assets/icon.png';
import { change } from '../redux/slices/pageSlice';
import Switch from 'react-switch';
import { useEffect, useState } from 'react';
import { toggle } from '../redux/slices/themeSlice';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

export default function TopBar() {
  const page = useSelector((state: RootState) => state.page.current);
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.current);

  const [checked, setChecked] = useState(theme === 'light' ? true : false);

  useEffect(() => {
    if (checked === true) dispatch(toggle('dark'));
    else if (checked === false) dispatch(toggle('light'));
  }, [checked]);

  return (
    <div
      className='topbar'
      id={`topbar-${page}`}>
      {page !== 'home' && (
        <div
          id='topbar-logo'
          onClick={() => dispatch(change('home'))}>
          <img
            src={logo}
            alt='logo'
          />
          <h1>MARIN</h1>
        </div>
      )}

      <div id='switch-container'>
        {theme === 'dark' ? <HiOutlineMoon /> : <HiOutlineSun />}

        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          onColor='#7776c6'
          onHandleColor='#d6d5f7'
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          height={20}
          width={48}
          className='react-switch'
        />
      </div>
    </div>
  );
}
