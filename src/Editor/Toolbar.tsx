import { useEffect, useState } from 'react';
import { FaHeading } from 'react-icons/fa';
import { FaBold, FaItalic, FaUnderline, FaIndent } from 'react-icons/fa6';
import {
  PiTextAlignCenterBold,
  PiTextAlignJustifyBold,
  PiTextAlignLeftBold,
  PiTextAlignRightBold,
} from 'react-icons/pi';
import { BiLink } from 'react-icons/bi';
import { GoFileMedia } from 'react-icons/go';
import { RxTable } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import HeadingOptions from './HeadingOptions';

export default function Toolbar() {
  const [headingBtn, setHeadingBtn] = useState(false);
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
      <button>
        <PiTextAlignCenterBold />
      </button>
      <button>
        <PiTextAlignJustifyBold />
      </button>
      <button>
        <PiTextAlignLeftBold />
      </button>
      <button>
        <PiTextAlignRightBold />
      </button>
      <button>
        <FaIndent />
      </button>
      <button>
        <BiLink />
      </button>
      <button>
        <GoFileMedia />
      </button>
      <button>
        <RxTable />
      </button>
      <button>
        <FaBold />
      </button>
      <button>
        <FaItalic />
      </button>
      <button>
        <FaUnderline />
      </button>
    </div>
  );
}
