import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }
  ${'' /* ::-webkit-scrollbar {
    background-color: initial;
    width: 5px;
} */}
${'' /* ::-webkit-scrollbar-thumb {
  background-color: rgba(${({ theme }) => theme.colors.rgb.primary}, .2);
    border-radius: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.border};
} */}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.2;
    
    ${'' /* color: ${({ theme }) => theme.colors.heading}; */}
  }
  
  a {
    font-size: 0.8rem;
    ${'' /* color: ${({ theme }) => theme.colors.black}; */}
  }
  
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  p,span {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.5rem;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2rem;
  }
  h4{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
  }
  
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .app{
    width: 100vw;
    height: auto;
    overflow: hidden;
    background-color: #f7f7fc;
  }

  @media screen and (max-width: 700px) {
     html{
      font-size: 80%;
     }
  }
 

`