import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper
      className="relative about-section overflow-hidden flex justify-center py-10"
      id="about"
    >
      <div className="custom-container flex flex-col">
        {/* border */}
        <div className="relative w-full mb-10">
          <img src="./images/border1.png" alt="border" />
        </div>

        <div className="wrapper mt-10 grid grid-rows-1 xl:grid-cols-2 xl:gap-4">

          <div className="img-content w-full h-full">
            <div className="content overflow-hidden ">
            </div>
          </div>

          <div>

          <div className="title">
            <h3>
            <span className=" text-2xl text-orange-500">About</span> 
            <span className="text-2xl text-gray-400"> US</span>
            </h3>
          </div>
          <div className="heading">
            <h2>
            TALKING BHAGAVAD GITA
            </h2>
          </div>

          <div className="description">
            <p>
              Bhagavad Gita, also known as the Gita - "The Song of The Lord" is
              a practical guide to one's life that guides one to re-organise
              their life, achieve inner peace and approach the Supreme Lord (the
              Ultimate Reality). It is a 700-verse text in Sanskrit which
              comprises chapters 23 through 40 in the Bhishma-Parva section of
              the Mahabharata. The Bhagavad Gita is a dialogue between Arjuna, a
              supernaturally gifted warrior and his guide and charioteer Lord
              Krishna on the battlefield of Kurukshetra. As both armies stand
              ready for the battle, the mighty warrior Arjuna, on observing the
              warriors on both sides becomes overwhelmed with grief and
              compassion due to the fear of losing his relatives and friends and
              the consequent sins attributed to killing his own relatives. So,
              he surrenders to Lord Krishna, seeking a solution. Thus, follows
              the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an
              intense analysis of life, emotions and ambitions, discussion of
              various types of yoga, including Jnana, Bhakti, Karma and Raja,
              the difference between Self and the material body as well as the
              revelation of the Ultimate Purpose of Life.
            </p>
          </div>

          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  .custom-container {
    margin: 0 8rem;
    p {
      color: ${({ theme }) => theme.colors.heading.primary};
      line-height: 1.8em;
    }
    .img-content{
      position: relative;
    }
    .title{
      position: relative;
      margin-bottom: 5px;
      z-index: 1;
      font-size: 1.4rem;
      line-height: 2.2rem;
      letter-spacing: 4px;
      text-transform: uppercase;
      font-weight: 400;
      color: #6f7794;
    }
    .heading{
      color: #555;
    }
    .content {
      position: relative;
      z-index: 2;
      background: url("/images/bg7.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 0%;
      /* width: 500px; */
      &:before{
        content: "";
        position: absolute;
        background-color: black;
        opacity: 0.2;
      }
    }

    .description {
      position: relative;
      /* p{
        color: #5b627d;
      } */
    }
  }
  @media (min-width: 1280px) {
    .content {
        width: 500px;
        height: 100%;
      &:before{
        width: 600px;
        height: 100%;
      }
    }
  }
  @media (max-width: 1280px) {
    .content{
      width: 100%;
      height: 400px;
    &::before{
      width: 100%;
      height: 100%;
    }
    }
    .custom-container {
      margin: 0 5rem;
      .content {
        margin-bottom: 2rem;
      }
    }
  }
`;
