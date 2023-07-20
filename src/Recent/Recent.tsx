import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './recent.scss';
import RecentDocument from './RecentDocument';
import { useEffect } from 'react';

export default function Recent() {
  const recentFiles = useSelector(
    (state: RootState) => state.files.recentFiles
  );

  useEffect(() => {
    console.log(recentFiles);
  }, [recentFiles]);

  return (
    <div
      id='recent'
      className='container'>
      {recentFiles?.map((fi) => {
        return (
          <div
            key={fi.id}
            className='recent-document-container'>
            <RecentDocument file={fi} />
          </div>
        );
      })}
    </div>
  );
}
