import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
let API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppContext = React.createContext();
// to create a provider fucntion
const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);


//   to  Add a filter 
  const filterArticlesByAuthor = (authorName) => {
    dispatch({ type: "FILTER_BY_AUTHOR", payload: authorName });
  };

  const fecthApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
// isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };
// search
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };
// pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

// to Add sort
const sortArticlesByComments = (order) => {
    const sortedArticles = [...state.hits].sort((a, b) => {
      if (order === "asc") {
        return a.num_comments - b.num_comments;
      } else {
        return b.num_comments - a.num_comments;
      }
    });
  
    dispatch({ type: "SORT_BY_COMMENTS", payload: sortedArticles });
  };
  



// to call the api function
  useEffect(() => {
    fecthApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, searchPost, getNextPage, getPrevPage, sortArticlesByComments, filterArticlesByAuthor }}>
      {children}
    </AppContext.Provider>
  );
};
// custom hook chitsreate
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };