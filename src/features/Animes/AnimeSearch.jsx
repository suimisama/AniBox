import { useMutation } from '@tanstack/react-query';
import { debounce } from 'lodash';
import { Input } from 'antd';
import { useAnime } from '../../context/AnimeContext';
import { searchAnimes } from '../../services/apiAnime';
import ImageBox from '../../ui/ImageBox';
import { useEffect } from 'react';

// 防抖函数
const debounceSearch = debounce((fn, keyword) => fn(keyword), 1000);

function AnimeSearch() {
  const {
    keyword,
    box,
    search,
    currentBox,
    handleKeywordChange,
    handleSearchUpdate,
    handleBoxUpdate,
  } = useAnime();

  const {
    isLoading,
    data,
    error,
    mutate: searchAnime,
  } = useMutation({
    mutationFn: (keyword) => searchAnimes(keyword),
    onSuccess: (data) => {
      // handleSearchUpdate();
      const list = data.list;
      const result = list.map((item) => {
        return {
          id: item.id,
          image: item.images,
        };
      });
      console.log(result);
      handleSearchUpdate(result);
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  useEffect(() => {
    debounceSearch(searchAnime, keyword);
  }, [keyword, searchAnime]);

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      searchAnime(keyword);
    }
  }
  function handleImageClick(index) {
    const item = search[index];
    const newBox = [...box];
    newBox[currentBox] = item;
    handleBoxUpdate(newBox);
  }
  return (
    <div className="mt-2">
      {currentBox !== null ? (
        <div className="flex flex-col gap-2 items-center w-full">
          <Input
            className="w-[370px] h-[36px] px-3 py-2 rounded-sm outline-transparent"
            value={keyword}
            onChange={(e) => handleKeywordChange(e.target.value)}
            onKeyDown={handleKeydown}
          ></Input>

          {search.length !== 0 && (
            <div className="flex items-center overflow-scroll">
              {search.map((item, index) => (
                <ImageBox
                  key={item.id}
                  size="normal"
                  src={item.image.common}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default AnimeSearch;
