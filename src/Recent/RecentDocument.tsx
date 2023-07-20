import DOMPurify from 'dompurify';
import { File } from '../redux/slices/filesSlice';
import { marked } from 'marked';
import { useEffect, useState } from 'react';

interface Props {
  file: File;
}

export default function RecentDocument({ file }: Props) {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    if (file.content) {
      /* find the first line of the file to use as title */
      let titleHtml = file.content
        .toString()
        .replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '')
        .split(/\r?\n|\r|\n/g)[0];

      /* parse the title to html */
      const clean = DOMPurify.sanitize(
        marked.parse(titleHtml, { headerIds: false, mangle: false })
      );

      /* find the text content of the title */
      const parser = new DOMParser();
      const html = parser
        .parseFromString(clean, 'text/html')
        .querySelector('body')?.firstChild?.textContent;

      if (html) setTitle(html);
    }
  }, []);

  useEffect(() => {
    const container = document.querySelector(`#text-${file.id}`);
    if (container) container.textContent = title;
  }, [title]);

  return (
    <div id={`recent-${file.id}`}>
      <div id={`ss-${file.id}`}></div>
      <div id={`text-${file.id}`}></div>
    </div>
  );
}
