import { useEffect, useState } from 'react';
import { FaHeading } from 'react-icons/fa';
import { TbColorSwatchOff } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeTool, resetColor } from '../redux/slices/toolSlice';
import { RootState } from '../redux/store';
import HeadingOptions from './HeadingOptions';

export default function Toolbar() {
  const [headingBtn, setHeadingBtn] = useState(false);
  const color = useSelector((state: RootState) => state.tool.color);
  const dispatch = useDispatch();

  return (
    <div id='toolbar-container'>
      <button onClick={() => setHeadingBtn(!headingBtn)}>
        <FaHeading />
      </button>

      <HeadingOptions
        headingBtn={headingBtn}
        setHeadingBtn={setHeadingBtn}
      />
    </div>
  );
}
