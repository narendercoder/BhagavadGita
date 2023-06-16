import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const VerseOfTheDay = ({id, desc, chapter, verse}) => {
    // console.log()
  return (
    <Wrapper className='flex justify-center items-center mt-14 md:-mt-32'>
     <div className="flex quote-of-day">
     <div className="container-box flex flex-col md:flex-row">
     <div className='bg-container'>
      <div className="bg-wrapper"></div>
     </div>
      <div className="flex flex-col p-10 md:justify-center">
        <div className="title flex items-center mb-3">
         <div className="heading mr-4 flex justify-center">
          <h5 className="mb-0 text-orange-500">{`Verse of the day - BG ${chapter}.${verse}`}</h5>
         </div>
         <span className="divider mb-0 w-5/12 md:w-8/12 h-0.5 bg-gray-300"></span>
        </div>
        <div className="description">
          <p className="text-gray-500 truncate whitespace-normal">{desc}</p>
        </div>
        <div className="button font-semibold text-sm cursor-pointer">
          <Link to={`/chapter/${chapter}/slok/${verse}`}>
          SEE MORE
          </Link>
        </div>
      </div>
    </div>
     </div>
  </Wrapper>
  )
}

export default VerseOfTheDay;

const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  /* margin-top: -120px; */
  z-index: 80;
  .quote-of-day {
    padding: 0 50px;
    max-width: 1152px;
    min-height: 234px;
    .container-box {
      width: 100%;
      background-color: white;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      overflow: hidden;
       .bg-container{
        overflow: hidden;
        background: url("./images/bg.png");
        background-position: 65% 0%;
        background-size: cover;
        background-repeat: no-repeat;
        .bg-wrapper{
        width: 100%;
        height: 100%;
        background: rgba(50, 32, 56, 0.2);
        
        }
       }
      .description {
        max-width: 95%;
      }
    }
  }
  @media screen and (min-width: 750px) {
    .container-box {
      max-height: 234px;
    }
    .bg-container{
      width: 300px;
      height: 300px;
    }
  }
  @media screen and (max-width: 750px) {
    .container-box {
      min-height: 234px;
    }
    .bg-container{
      width: 100%;
      height: 200px;
    }
  }
`