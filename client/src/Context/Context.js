import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./Reducer";
import axios from "axios";

const AppContext = React.createContext();

const API = `${process.env.REACT_APP_BACKEND_URL}/chapter`;

const initialState = {
    DefaultLanguage: "english",
    isLoading: false,
    isChapterLoading: false,
    isSingleLoading: false,
    isVersesLoading: false,
    isError: false,
    isVerseLoading: false,
    isSlokLoading: false,
    chapter: [],
    image: "",
    description: "",
    slok: {},
    singleChapter: {},
    chapterVerses: [],
    verse: {},
    isdarkMode: JSON.parse(localStorage.getItem("TOGGLE_DARKTHEME")) || false,
  }

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [header, setHeader] = useState(false);

   const selectLanguage = (data) =>{
    return dispatch({type: "SET_SELECT_LANGUAGE", payload: data})
   }

  //get all particular chapter
  const fetchChapters = async () => {
    dispatch({type: "SET_CHAPTERS_LOADING"})
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/chapters`);
      const data = response.data;
      dispatch({type: "GET_CHAPTER", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  };

  //get random slok
  const fetchRandomSlok = async () => {
    dispatch({type: "SET_LOADING"})
    try {
      dispatch({type: "SET_LOADING"})
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/slok/`);
      const data = response.data;
      dispatch({type: "GET_RANDOM_SLOK", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  };

  //get  particular chapter
  const GetSingleChapter = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(`${API}/${url}`);
      const data = response.data;
      dispatch({type: "GET_SINGLE_CHAPTER", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };

  //get all shlok from particular chapter
  const GetAllVerses = async (url) => {
    dispatch({type: "SET_VERSES_LOADING"})
    try {
      const response = await axios.get(`${API}/${url}`);
      const data = response.data;
      dispatch({type: "GET_ALL_VERSES", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };

  //get particular shlok from particular chapter
  const GetVerse = async (url) => {
    dispatch({type: "SET_VERSE_LOADING"})
    try {
      const response = await axios.get(`${API}/${url}`);
      const data = response.data;
      // console.log(data)
      dispatch({type: "GET_VERSE", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };

  const toggleTheme= () =>{
    return dispatch({type: "TOGGLE_THEME"})
}
  
 
  useEffect(()=>{
    fetchChapters();
  }, [])

  useEffect(()=>{
    fetchRandomSlok();
  }, [])

  // useEffect(()=>{
  //   GetSingleChapter();
  // }, [])

  // useEffect(()=>{
  //   GetAllVerses();
  // }, [])

  // useEffect(()=>{
  //   GetVerse();
  // }, [])



  return <AppContext.Provider value={{...state,header, setHeader,selectLanguage, fetchChapters, fetchRandomSlok, GetSingleChapter, GetAllVerses, GetVerse, toggleTheme}} >
  {children}
  </AppContext.Provider>;
};

//global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}