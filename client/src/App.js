import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Shlok from "./Components/Shlok";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Contact from "./Pages/Contact";
import VersePage from "./Pages/VersePage";
import ChapterPage from "./Pages/ChapterPage";
import Chapters from "./Components/Chapters";
import ErrorPage from "./Components/ErrorPage";
import LoadingPage from "./Components/LoadingPage";
import { useGlobalContext } from "./Context/Context";
import Header from "./Components/Header";
import Music from "./Components/Music";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";

function App() {
  const { isLoading } = useGlobalContext();

  const lightTheme = {
    colors: {
      
    },
  };

  const darkTheme = {
    colors: {
      
    },
  };

  // useEffect(() => {
  //     setTimeout(() => {
  //       setloading(false);
  //     }, 1000);
  //   // eslint-disable-next-line
  // }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div className="app">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <Music />
            <ScrollToTopButton />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/chapter/:id/" element={<ChapterPage />}/>
              <Route path="/chapter/:id/slok/:sh" element={<VersePage />} />
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
