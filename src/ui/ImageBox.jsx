import { IoImageOutline } from 'react-icons/io5';
import { useAnime } from '../context/AnimeContext';
function ImageBox({ id, src = '', onClick, size = 'normal' }) {
  const { currentBox, border } = useAnime();

  const sizeStyles = {
    small: 'w-[150px] h-[150px]',
    normal: 'w-[200px] h-[200px]',
    large: 'w-[300px] h-[300px]',
    auto: '',
  };
  const computedBorder = 3 - border * 0.03 || 3;
  const active = currentBox === id;

  return (
    <a
      className={`flex justify-center items-center border-[3px] overflow-hidden text-sky-700 border-dashed hover:text-slate-950 cursor-pointer ${active ? ' border-sky-700' : 'border-transparent'}`}
      onClick={onClick}
    >
      {src ? (
        <img className={`block ${sizeStyles[size]}`} src={src} />
      ) : (
        <IoImageOutline className="h-[32px] w-[32px]" />
      )}
    </a>
  );
}

export default ImageBox;
