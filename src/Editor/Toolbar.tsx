import { useEffect, useState } from 'react';
import { FaHeading } from 'react-icons/fa';
import { TbColorSwatchOff } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, changeTool, resetColor } from '../redux/slices/toolSlice';
import { RootState } from '../redux/store';

export default function Toolbar() {
  const [headingBtn, setHeadingBtn] = useState(false);
  const color = useSelector((state: RootState) => state.tool.color);
  const dispatch = useDispatch();

  return (
    <div id='toolbar-container'>
      <button onClick={() => setHeadingBtn(!headingBtn)}>
        <FaHeading />
      </button>
      <div
        id='heading-btn-container'
        style={
          headingBtn
            ? { transform: 'translateY(12%) scaleY(1)' }
            : { transform: 'translateY(-38%) scaleY(0)' }
        }>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h1'));
          }}>
          <h1>Heading 1</h1>
        </button>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h2'));
          }}>
          <h2>Heading 2</h2>
        </button>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h3'));
          }}>
          <h3>Heading 3</h3>
        </button>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h4'));
          }}>
          <h4>Heading 4</h4>
        </button>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h5'));
          }}>
          <h5>Heading 5</h5>
        </button>
        <button
          onClick={() => {
            setHeadingBtn(false);
            dispatch(changeTool('h6'));
          }}>
          <h6>Heading 6</h6>
        </button>
      </div>
      <button>
        <input
          type='color'
          id='colorpicker'
          value={color ? color : '#000000'}
          onChange={(e) => dispatch(changeColor(e.currentTarget.value))}
        />
      </button>
      <button onClick={() => dispatch(resetColor())}>
        <TbColorSwatchOff />
      </button>
    </div>
  );
}
