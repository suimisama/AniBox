import { IoImageOutline } from 'react-icons/io5';
import { useAnime } from '../context/AnimeContext';
function ImageBox({ id, onClick, src = '', size = 'normal' }) {
  const { currentBox, border, borderColor } = useAnime();
  const active = currentBox === id;
  const sizeStyles = {
    small: 'w-[150px] h-[150px]',
    normal: 'w-[200px] h-[200px]',
    large: 'w-[300px] h-[300px]',
    auto: '',
  };
  const computedBorder = 1 - border * 0.01;
  const shadowStyles = {
    boxShadow: `${borderColor} 0px 0px 0px ${active ? 0 : computedBorder}px`,
  };

  return (
    <a
      className={`flex justify-center items-center overflow-hidden image-shadow text-sky-700 border-dashed hover:text-slate-950 cursor-pointer ${active ? 'border-[3px] border-sky-700 z-20' : ''}`}
      style={shadowStyles}
      onClick={onClick}
    >
      {src ? (
        <img className={`block aspect-[16/9] ${sizeStyles[size]}`} src={src} />
      ) : (
        <IoImageOutline className="h-[32px] w-[32px]" />
      )}
    </a>
  );
}

export default ImageBox;
