import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Toggler from "./Toggler";

const Header = ({header}) => {


  return (
    <Wrapper className="w-full items-center">
      <div className={header ? "header active grid  items-center w-full place-content-center" : "header grid gap-5 items-center w-full place-content-center"}>
        <NavLink to="/">
          <div className="logo flex text-left ">
           <img src={header ? "/images/logo3.png" : "/images/logo2.png"} alt="logo" />
          </div>
        </NavLink>

        <Navbar />
        <div className="navbar-link mode-toggler flex justify-end">
          <Toggler />
        </div>

      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 80px;
  display: flex;
  .header{
    padding: 0px 30px;
    grid-template-columns: 0.5fr 2fr 0.5fr ;
  }
  .header.active{
    background-color: white;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.5);

    .mode-toggler{
    color: black
  }

    .navbar-link{
      color: black;
    &:hover,
    &:active {
      transition: color 0.3s linear;
      border-bottom: 2px solid black;
    }
    }
  }
  .mode-toggler{
    font-size: 2rem;
    color: white
  }
`;
