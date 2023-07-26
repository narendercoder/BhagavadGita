import React from 'react'
import HeroSection from '../Components/HeroSection'
import Chapters from '../Components/Chapters'
import About from './About'
import Contact from './Contact'
import styled from 'styled-components'

const HomePage = () => {
  
  
  return (
     <Wrapper className='relative w-screen overflow-hidden'>
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