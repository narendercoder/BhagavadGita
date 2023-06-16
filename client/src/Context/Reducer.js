const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_CHAPTER":
      return {
        ...state,
        chapter: action.payload,
        isLoading: false,
      };
    case "GET_RANDOM_SLOK":
      return {
        ...state,
        slok: action.payload,
        isLoading: false,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    case "GET_SINGLE_CHAPTER":
      return {
        ...state,
        singleChapter: action.payload,
        issingleLoading: false,
      };
    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };
    case "SET_VERSES_LOADING":
      return {
        ...state,
        isVersesLoading: true,
      };
    case "GET_ALL_VERSES":
      return {
        ...state,
        chapterVerses: action.payload,
        isVersesLoading: false,
      };

      case "SET_VERSE_LOADING":
        return {
          ...state,
          isVerseLoading: true,
        };
      case "GET_VERSE":
        return {
          ...state,
          verse: action.payload,
          isVerseLoading: false,
        };

    default:
      return state;
  }
  // if(action.type === "HOME_UPDATE"){
  //     return{
  //         ...state,
  //         description: action.payload.description,
  //         image: action.payload.image
  //     }
  // }
  // if(action.type === "SET_LOADING"){
  //     return{
  //         ...state,
  //         isLoading: true,
  //     }
  // }
  // if(action.type === "SET_LOADING"){
  //     return{
  //         ...state,
  //         isLoading: false,
  //         isError: true,
  //     }
  // }

  // if(action.type === "GET_CHAPTER"){
  //     return{
  //         ...state,
  //         chapter: action.payload,
  //     }
  // }
  // if(action.type === "GET_RANDOM_SLOK"){
  //     return{
  //         ...state,
  //         slok: action.payload,
  //     }
  // }
  // if(action.type === "GET_SINGLE_CHAPTER"){
  //     return{
  //         ...state,
  //         singleChapter: action.payload,
  //     }
  // }
  // return state;
};

export default reducer;
