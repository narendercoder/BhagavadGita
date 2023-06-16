import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper className="flex justify-center items-center">
      <div className="navbar w-full">
        <ul className="navbar-lists flex justify-center items-center">
          <li>
            <Link
              to="/"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              className="navbar-link "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              className="navbar-link "
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              smooth={true}
              offset={-50}
              duration={500}
              className="navbar-link "
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  padding: 20px;
  .navbar-link {
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: white;
    padding: 0.5rem 0rem;
    cursor: pointer;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s linear;
    &:link,
    &:visited {
      font-size: 1rem;
    }
    &:hover,
    &:active {
      transition: color 0.3s linear;
      border-bottom: 2px solid white;
    }
  }
  .navbar-lists {
    li {
      width: 100%;
      padding: 0 10px;
      text-align: center;
    }
  }
`;
