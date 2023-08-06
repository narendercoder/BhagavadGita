import React from 'react'
import styled from 'styled-components';

const Border = () => {
  return (
    <Wrapper>
      <div className="custom-container">
      <div className="relative w-full h-full">
        <img src="./images/border1.png" alt="border" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Border;

const Wrapper = styled.div`
.custom-container {
    margin: 0 8rem;
}
@media (max-width: 1280px) {

    .custom-container {
      margin: 0 5rem;
      
    }
  }
`