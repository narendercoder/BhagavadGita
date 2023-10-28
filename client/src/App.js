import AOS from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Contact from "./Pages/Contact";
import VersePage from "./Pages/VersePage";
import ChapterPage from "./Pages/ChapterPage";
import Chapters from "./Components/Chapters";
import ErrorPage from "./Components/ErrorPage";
import { useGlobalContext } from "./Context/Context";
import Music from "./Components/Music";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";
import Header from "./Components/Header";
import { useCallback, useEffect } from "react";
import { darkTheme, lightTheme } from "./config/Theme";
import "aos/dist/aos.css";

// Define the main App component
function App() {
  // Destructure values from the global context
  const { isLoading, isdarkMode, header, setHeader } = useGlobalContext();
  const location = useLocation();



  // Function to change the header background based on scroll position
  const changeHeaderBackground = useCallback(() => {
    if (window.scrollY >= 10) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }, [setHeader]);

  // useEffect(()=>{
  //   AOS.init({
  //     once: true,
  //     duration: 1000,
  //     offset: 100,
  //   });
  // }, [])
 
 

  useEffect(() => {
    // Add scroll event listener to change header background
    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      window.removeEventListener("scroll", changeHeaderBackground);
    };
  }, [changeHeaderBackground]);

  

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />

      <div className="app">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header header={header} location={location} />
            <Music />
            <ScrollToTopButton />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/chapter/:id/" element={<ChapterPage />} />
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
