import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './index.scss';
import { RootState } from './redux/store';
import { change } from './redux/slices/themeSlice';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme.current);
  const dispatch = useDispatch();

  /* grab user theme preference on initial load */
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(change('dark'));
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      dispatch(change('light'));
    }
  }, []);

  return (
    <div
      className='App'
      id={theme}>
      marin
    </div>
  );
}
