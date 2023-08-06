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


function App() {
  const { isLoading } = useGlobalContext();
  const { isdarkMode } = useGlobalContext();
  const { header, setHeader} = useGlobalContext();
  const location = useLocation();

  const changeHeaderBackground = () =>{
    if(window.scrollY >= 10){
      setHeader(true);
    }
    else{
      setHeader(false);
    }
  }
    window.addEventListener('scroll', changeHeaderBackground);
  
  const lightTheme = {
    colors: {
      "textgray": "rgb(75, 85, 99)",
      "orange": "orange",
      heading: {
        primary: "rgb(0, 0, 0)",
      },
      bg: {
        primary: "rgb(255, 255, 255)",
      },
      highlight: {
        primary: "rgb(255, 152, 0)",
        "secondary": "#1a0dab"
      },
      "border":{
        "primary": "radial-gradient(at center , rgb(221, 221, 221) 0%, rgba(255, 255, 255, 0) 70%)"
      },
      "border_color":{
        "primary": "#f6e0ce"
      },
      "gradient":{
        "primary": "linear-gradient(to right bottom, rgb(242, 242, 242) 0%, rgb(242, 242, 242) 100%);"
      }
    },
  };

  const darkTheme = {
    colors: {
      "textgray": "rgb(209 213 219)",
      "orange": "orange",
      heading: {
        primary: "rgb(255, 255, 255)",
        "secondary": "rgb(160, 160, 160)",
      },
      bg: {
        primary: "rgb(49, 49, 58)",
      },
      highlight: {
        "primary": "rgb(255, 152, 0)",
        "secondary": "orange"
      },
      "border": {
        "primary": "radial-gradient(at center top, rgba(197, 202, 213, 0.15) 0%, rgba(255, 255, 255, 0) 70%);"
      },
      "border_color":{
        "primary": "gray"
      },
      gradient:{
        "primary": "linear-gradient(to right bottom, rgba(23, 23, 27) 0%, rgba(40, 40, 47) 100%);"
      }
    },
  };

  

  // console.log(location.pathname)

  // useEffect(() => {
  //     setTimeout(() => {
  //       setloading(false);
  //     }, 1000);
  //   // eslint-disable-next-line
  // }, []);

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
