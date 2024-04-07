import AnimeSettingBar from './AnimeSettingBar';
import AnimeSearch from './AnimeSearch';
import AnimeImageBox from './AnimeImageBox';

function AnimeContainer() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <AnimeSearch />
      <AnimeImageBox />
      <AnimeSettingBar />
    </div>
  );
}

export default AnimeContainer;
