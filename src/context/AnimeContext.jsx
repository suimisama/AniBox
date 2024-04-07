import {
  useContext,
  useEffect,
  useReducer,
  createContext,
  useRef,
} from 'react';

const AnimeContext = createContext();
const initialState = {
  currentBox: -1,
  keyword: '',
  search: [],
  size: 3,
  box: [],
  border: 0,
  borderColor: 'rgb(255, 255, 255)',
};

function reducer(state, action) {
  switch (action.type) {
    case 'changeCurrentBox':
      return { ...state, currentBox: action.payload };
    case 'changeKeyword':
      return { ...state, keyword: action.payload };
    case 'updateSearch':
      return { ...state, search: action.payload };
    case 'updateSize':
      return { ...state, size: action.payload };
    case 'updateBox':
      return { ...state, box: action.payload };
    case 'updateBorder':
      return { ...state, border: action.payload };
    case 'updateBorderColor':
      return { ...state, borderColor: action.payload };
    default:
      return state;
  }
}

function AnimeProvider({ children }) {
  const [
    { currentBox, keyword, search, size, box, border, borderColor },
    dispatch,
  ] = useReducer(reducer, initialState);
  const imageRef = useRef(null);
  useEffect(() => {
    const arr = Array.from({ length: size * size }).map((_, index) => {
      return { id: index + 1, image: {} };
    });
    handleBoxUpdate(arr);
  }, [size]);

  function handleCurrentBoxChange(newCurrentBox) {
    dispatch({ type: 'changeCurrentBox', payload: newCurrentBox });
  }
  function handleKeywordChange(newKeyword) {
    dispatch({ type: 'changeKeyword', payload: newKeyword });
  }
  function handleSearchUpdate(newSearch) {
    dispatch({ type: 'updateSearch', payload: newSearch });
  }
  function handleSizeUpdate(newSize) {
    dispatch({ type: 'updateSize', payload: newSize });
  }
  function handleBoxUpdate(newBox) {
    dispatch({ type: 'updateBox', payload: newBox });
  }
  function handleBorderUpdate(newBorder) {
    dispatch({ type: 'updateBorder', payload: newBorder });
  }
  function handleBorderColorUpdate(newBorderColor) {
    dispatch({ type: 'updateBorderColor', payload: newBorderColor });
  }
  return (
    <AnimeContext.Provider
      value={{
        currentBox,
        keyword,
        search,
        size,
        box,
        border,
        borderColor,
        imageRef,
        handleCurrentBoxChange,
        handleKeywordChange,
        handleSearchUpdate,
        handleSizeUpdate,
        handleBoxUpdate,
        handleBorderUpdate,
        handleBorderColorUpdate,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

function useAnime() {
  const context = useContext(AnimeContext);
  if (context === undefined)
    throw new Error('AnimeContext was used outside the AnimeProvider');
  return context;
}

export { AnimeProvider, useAnime };
