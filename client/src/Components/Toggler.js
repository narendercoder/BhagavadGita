import React, { useState } from 'react';
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import styled from "styled-components";

const Toggler = () => {
const [toggle, setToggle] = useState(false);
  return (
    <Wrapper>
      {toggle === false ? (
        <RiMoonLine className="icon" />
      ) : (
        <RiSunLine className="icon" />
      )}
    </Wrapper>
  )
}

export default Toggler;

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
`;