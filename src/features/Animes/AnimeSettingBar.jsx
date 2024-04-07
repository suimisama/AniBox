import { Select, Slider, Button, Card, ColorPicker } from 'antd';

import { useAnime } from '../../context/AnimeContext';
import { useEffect, useMemo, useState } from 'react';

function AnimeSettingBar() {
  const [showSlider, setShowSlider] = useState(false);
  const [colorRgb, setColorRgb] = useState('rgb(22, 119, 255)');
  const rgbString = useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb?.toRgbString()),
    [colorRgb]
  );
  useEffect(() => {
    handleBorderColorUpdate(rgbString);
  }, [rgbString]);

  const {
    border,
    borderColor,
    handleBorderUpdate,
    handleSizeUpdate,
    handleBorderColorUpdate,
  } = useAnime();
  function handleSizeChange(value) {
    handleSizeUpdate(value);
  }
  function handleSaveChange(value) {}
  function handleColorChange(value) {
    handleBorderColorUpdate(value);
  }
  return (
    <div className="w-[600px] min-h-[100px] flex gap-1">
      <Select
        defaultValue="3x3"
        style={{ width: 90 }}
        onChange={handleSizeChange}
        options={[
          { value: 2, label: '2x2' },
          { value: 3, label: '3x3' },
          { value: 4, label: '4x4' },
          { value: 5, label: '5x5' },
        ]}
      ></Select>
      <Select
        defaultValue="存为..."
        style={{ width: 90 }}
        onChange={handleSaveChange}
        options={[
          { value: 'jpeg', label: 'jpeg' },
          { value: 'png', label: 'png' },
          { value: 'webp', label: 'webp' },
        ]}
      ></Select>

      <div className="relative min-w-[200px]">
        <Button onClick={() => setShowSlider(!showSlider)}>间隔</Button>
        {showSlider && (
          <div className="px-3 py-2 mt-2 rounded-md bg-white">
            <ColorPicker
              format="rgb"
              defaultValue={borderColor}
              onChange={setColorRgb}
              showText
            />
            <Slider
              defaultValue={50}
              value={border}
              onChange={handleBorderUpdate}
              className="position bottom-0"
            ></Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimeSettingBar;
