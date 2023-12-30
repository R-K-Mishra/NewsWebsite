const reducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "GET_STORIES":
        return {
          ...state,
          isLoading: false,
          hits: action.payload.hits,
          nbPages: action.payload.nbPages,
        };
  
      case "SORT_BY_COMMENTS":
        return {
          ...state,
          hits: [...state.hits].sort((a, b) => {
            return action.payload === "asc" ? a.num_comments - b.num_comments : b.num_comments - a.num_comments;
          }),
        };
  
      case "FILTER_BY_AUTHOR":
        return {
          ...state,
          hits: state.hits.filter((article) =>
            article.author.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
  
      case "SEARCH_QUERY":
        return {
          ...state,
          query: action.payload,
        };
  
      case "NEXT_PAGE":
        let pageNumInc = state.page + 1;
  
        if (pageNumInc >= state.nbPages) {
          pageNumInc = 0;
        }
        return {
          ...state,
          page: pageNumInc,
        };
  
      case "PREV_PAGE":
        let pageNum = state.page - 1;
  
        if (pageNum <= 0) {
          pageNum = 0;
        }
  
        return {
          ...state,
          page: pageNum,
        };
    }
  
    return state;
  };
  
  export default reducer;
