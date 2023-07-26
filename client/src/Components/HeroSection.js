import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import VerseOfTheDay from "./VerseOfTheDay";

const HeroSection = () => {
  const [RandomSlok, setRandomSlok] = useState({});
  const { slok } = useGlobalContext();

  // console.log(RandomSlok);

  useEffect(() => {
    setRandomSlok(slok);
  }, [slok]);

  return (
      <>
        <Wrapper className="relative hero-section">
        <div className="custom-container">
          <div className="flex justify-center items-center">
            <div className="relative hero-section-bg flex justify-center items-center">
              <div className="hero-section-data flex flex-col justify-center items-center">
                <h1 className="text-white">Experience the Gita</h1>
                <h2 className="text-amber-400">Anywhere, Anytime.</h2>
              </div>
              {/* <div className="login-btn">Login</div> */}
            </div>
          </div>
        </div>

        <div className="hero-section-image absolute w-screen h-screen">
          <div className="hero-container">
            <div className="wrapper"></div>
          </div>
        </div>
      </Wrapper>

      <VerseOfTheDay
        id={RandomSlok.id}
        desc={
          Object.keys(RandomSlok).length !== 0
            ? RandomSlok.translations[3].description
            : ""
        }
        chapter={RandomSlok.chapter_number}
        verse={RandomSlok.verse_number}
      />
      </>
  );
};

export default HeroSection;

const Wrapper = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;
    background: transparent;
    background-color: rgb(250,247,237);
    img {
      width: 100%;
      height: 100%;
    }
    .custom-container {
      width: auto;
      max-height: 100%;
      z-index: 2;
    }
    .hero-section-bg {
      position: relative;
      width: 100%;
      height: 90vh;
      border-radius: 10px;
      overflow: hidden;
      .hero-section-data {
        z-index: 2;
        width: 100%;
        h1{
          margin-bottom: 3rem;
          font-family: 'Birthstone Bounce', cursive;
          font-weight: 500;
        }
        h2{
          margin-bottom: 30px;
          font-weight: 500;
        }
      }
    }

    .hero-section-image {
      position: absolute;
      height: 100vh;
      top: 0%;
      left: 0;
      overflow: hidden;
      /* background-color: rgba(255, 250, 236, 0.5); */
      .hero-container {
        position: relative;
        width: 110vw;
        height: 100vh;
        background: url("/images/bg5.jpg");
        transform-origin: 0% 0%;
        transform: translate3d(-42.7px, -32.1204px, 0px) scale(1.1, 1.1);
        background-repeat: no-repeat;
        background-size: cover;
        animation: zoom-in linear 12s;
        .wrapper {
          width: 100vw;
          height: 100vh;
          /* background-color: rgba(0, 0, 0, 0.3); */
        }
      }
    }

    @keyframes zoom-in {
       0%{
        transform: translate3d(0, 0, 0) scale(1, 1);
       }
       100%{
        transform: translate3d(-42.7px, -32.1204px, 0px) scale(1.1, 1.1);
       }

    }
  

  @media (min-width: 900px) {
    .custom-container {
      margin: 0px 80px;
    }
    h1{
      font-size: 7rem;
    }
    h2{
      font-size: 4rem;
    }
  }
  @media (max-width: 900px) {
    .custom-container {
      margin: 0px 20px;
    }
    h1{
      font-size: 5rem;
    }
    h2{
      font-size: 3rem;
    }
    .hero-section-bg {
      background-position: 75% 50%;
    }
  }
  @media (max-width: 768px){
    .hero-section-bg {
      height: 100vh;
  }
}
`;
