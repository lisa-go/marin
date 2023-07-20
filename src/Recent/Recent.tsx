import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function Recent() {
  const recentFiles = useSelector(
    (state: RootState) => state.files.recentFiles
  );

  return (
    <div
      id='recent'
      className='container'>
      {recentFiles?.map((fi) => {
        return (
          <div
            key={fi.id}
            style={{ border: '2px solid black', width: '300px' }}>
            {fi.content?.toString()}
          </div>
        );
      })}
    </div>
  );
}
