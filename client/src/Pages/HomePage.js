import React from 'react'
import HeroSection from '../Components/HeroSection'
import Chapters from '../Components/Chapters'
import About from './About'
import Contact from './Contact'
import styled from 'styled-components'
import Header from '../Components/Header'
import { useState } from 'react'


const HomePage = () => {
  const [header, setHeader] = useState(false);
  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setHeader(true);
    }
    else{
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <Wrapper className='relative w-screen overflow-hidden'>
      <Header header={header} />
      <HeroSection/>
      <Chapters/>
      <About/>
      <Contact/>
    </Wrapper>
  )
}

export default HomePage;

const Wrapper = styled.div`
/* background-color: rgb(250,247,237); */
`