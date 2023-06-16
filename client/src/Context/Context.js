import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./Reducer";
import axios from "axios";

const AppContext = React.createContext();

const initialState = {
    isLoading: false,
    chapter: [],
    image: "",
    description: "",
    slok: {},
    singleChapter: {},
    isSingleLoading: false,
    isError: false,
    isVersesLoading: false,
    isVerseLoading: false,
    chapterVerses: [],
    verse: {},
  }

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const UpdateHomePage = () =>{
  //   return dispatch({
  //      type: "HOME_UPDATE",
  //      payload: {
  //       description: "",
  //       image: ""
  //      }
  //   })
  // }

  //to call the api

  // const options = {
  //   headers: {
  //     'X-RapidAPI-Key': '43dad927f4msh75983f0bf4a29d5p1ac4d8jsna190ce106853',
  //     'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  //   }
  // };

  // const options = {
  //   method: 'GET',
  //   withCredentials: false,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Content-Type': 'application/json',
  //   },
    
  // };
  
 
  // const fetchAPI = async () => {
  //   try {
  //       const res = await axios.request("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/",options);
  //       // const res = await axios.get("https://bhagavadgitaapi.in/chapters",options)
  //       const data = res.data;
  //       dispatch({type: "GET_CHAPTER", payload: data})
  //   } catch (error) {
  //       console.error(error);
  //   }
  // }

  const fetchChapters = async () => {
    dispatch({type: "SET_LOADING"})
    try {
      const response = await axios.get('http://localhost:4000/chapters');
      const data = response.data;
      dispatch({type: "GET_CHAPTER", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  };

  const fetchRandomSlok = async () => {
    dispatch({type: "SET_LOADING"})
    try {
      dispatch({type: "SET_LOADING"})
      const response = await axios.get('http://localhost:4000/slok/');
      const data = response.data;
      dispatch({type: "GET_RANDOM_SLOK", payload: data})
    } catch (error) {
      dispatch({type: "API_ERROR"})
    }
  };

  const GetSingleChapter = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"})
    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch({type: "GET_SINGLE_CHAPTER", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };

  const GetAllVerses = async (url) => {
    dispatch({type: "SET_VERSES_LOADING"})
    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch({type: "GET_ALL_VERSES", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };

  const GetVerse = async (url) => {
    dispatch({type: "SET_VERSE_LOADING"})
    try {
      const response = await axios.get(url);
      const data = response.data;
      // console.log(data)
      dispatch({type: "GET_VERSE", payload: data})
    } catch (error) {
      dispatch({type: "SET_SINGLE_ERROR"})
    }
  };
  
 
  useEffect(()=>{
    fetchChapters();
  }, [])

  useEffect(()=>{
    fetchRandomSlok();
  }, [])

  useEffect(()=>{
    GetSingleChapter();
  }, [])

  useEffect(()=>{
    GetAllVerses();
  }, [])

  useEffect(()=>{
    GetVerse();
  }, [])


  return <AppContext.Provider value={{...state, fetchChapters, fetchRandomSlok, GetSingleChapter, GetAllVerses, GetVerse}} >
  {children}
  </AppContext.Provider>;
};

//global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}