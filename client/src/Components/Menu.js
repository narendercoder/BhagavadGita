import React from 'react'
import styled from 'styled-components';

const Menu = () => {
  return (
    <Wrapper>
        <div>
            <ul>
                <li>Home</li>
                <li>Language</li>
                <li>BookMark</li>
            </ul>
        </div>
    </Wrapper>
  )
}

export default Menu;

const Wrapper = styled.div`

`