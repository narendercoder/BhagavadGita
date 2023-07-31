import React from 'react'
import HeroSection from '../Components/HeroSection'
import Chapters from '../Components/Chapters'
import About from './About'
import Contact from './Contact'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

const HomePage = () => {
  
  
  return (
     <Wrapper className='relative w-screen overflow-hidden'>
       <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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