import { useDispatch } from 'react-redux';
import { changeTool } from '../redux/slices/toolSlice';

interface Props {
  setHeadingBtn: React.Dispatch<React.SetStateAction<boolean>>;
  headingBtn: boolean;
}

export default function HeadingOptions({ setHeadingBtn, headingBtn }: Props) {
  const dispatch = useDispatch();

  return (
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
      <button
        onClick={() => {
          setHeadingBtn(false);
          dispatch(changeTool('p'));
        }}>
        <p>Paragraph</p>
      </button>
    </div>
  );
}
