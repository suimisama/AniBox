import { Select, Slider, Button } from 'antd';

import { useAnime } from '../../context/AnimeContext';
import { useState } from 'react';

function AnimeSettingBar() {
  const [showSlider, setShowSlider] = useState(false);

  const { border, handleBorderUpdate, handleSizeUpdate } = useAnime();
  function handleSizeChange(value) {
    handleSizeUpdate(value);
  }
  function handleSaveChange(value) {}

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
          <Slider
            defaultValue={50}
            value={border}
            onChange={handleBorderUpdate}
            className="position bottom-0"
          ></Slider>
        )}
      </div>
    </div>
  );
}

export default AnimeSettingBar;
