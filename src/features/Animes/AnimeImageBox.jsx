import { useAnime } from '../../context/AnimeContext';
import ImageBox from '../../ui/ImageBox';

function AnimeImageBox() {
  const { box, size, currentBox, handleCurrentBoxChange, handleBoxUpdate } =
    useAnime();
  const gridStyle = {
    gridTemplateColumns: `repeat(${size}, 1fr)`,
    gridTemplateRows: `repeat(${size}, 1fr)`,
  };

  const computeSize = () => {
    if (size > 3) return 'small';
    if (size === 3) return 'normal';
    if (size < 3) return 'large';
  };
  const imageSize = computeSize();
  function handleClickImage(index) {
    if (currentBox === index) {
      const newBox = [...box];
      newBox[index] = { id: index, image: {} };
      console.log(newBox);
      handleBoxUpdate(newBox);
    } else {
      handleCurrentBoxChange(index);
    }
  }
  function handleClickBox(e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === 'box') {
      handleCurrentBoxChange(null);
    }
  }

  return (
    <div
      id="box"
      className="mx-auto px-[200px]"
      onClick={(e) => handleClickBox(e)}
    >
      <div className="grid min-h-[600px] min-w-[600px] my-5" style={gridStyle}>
        {box.map((item, index) => {
          return (
            <ImageBox
              key={index}
              id={index}
              src={item.image?.common}
              size={imageSize}
              onClick={() => handleClickImage(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AnimeImageBox;
