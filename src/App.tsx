import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './index.scss';
import { RootState } from './redux/store';
import { toggle } from './redux/slices/themeSlice';
import Home from './Home/Home';
import TopBar from './TopBar/TopBar';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme.current);
  const dispatch = useDispatch();

  /* grab user theme preference on initial load */
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(toggle('dark'));
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      dispatch(toggle('light'));
    }
  }, []);

  const page = useSelector((state: RootState) => state.page.current);

  return (
    <div
      className='App'
      id={theme}>
      <TopBar />
      {page === 'home' && <Home />}
    </div>
  );
}
