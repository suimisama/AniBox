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
  const computedBorder = 1 - border * 0.01 || 1;
  const shadowStyles = {
    boxShadow: `rgb(255, 255, 255) 0px 0px 0px ${computedBorder}px`,
  };

  const active = currentBox === id;

  return (
    <a
      className={`flex justify-center items-center overflow-hidden image-shadow text-sky-700 border-dashed hover:text-slate-950 cursor-pointer ${active ? ' border-sky-700' : 'border-transparent'}`}
      style={shadowStyles}
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
