import { createFileName } from 'use-react-screenshot';

export function downloadImage(
  iImage,
  { name = 'img', extension = 'png' } = {}
) {
  const a = document.createElement('a');
  a.href = iImage;
  a.download = createFileName(extension, name);
  a.click();
}
