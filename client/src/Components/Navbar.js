import React, { useState } from "react";
// import { Link } from "react-scroll";
import styled from "styled-components";
import { CgClose, CgMenu } from "react-icons/cg";
import Toggler from "./Toggler";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Navbar = ({ header, location }) => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { isdarkMode } = useGlobalContext();
  return (
    <Wrapper className="w-full">
      <div className={menuIcon ? "navbar active" : "navbar "}>
        <div
          className="menu_mobile_overlay"
          onClick={() => setMenuIcon(false)}
        ></div>
        <div className="navbar-container w-full grid gap-3">
          <div className="logo">
            <NavLink to="/">
              <img
                src={
                  "/images/logo2.png" 
                }
                alt="logo"
              />
            </NavLink>
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>

          <div className="navbar-lists flex justify-center items-center">
            <ul>
              <li>
                <Link
                  to="/"
                  activeclass="active"
                  smooth={"true"}
                  offset={-50}
                  duration={500}
                  onClick={() => setMenuIcon(false)}
                  className="navbar-link "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  activeclass="active"
                  smooth={"true"}
                  offset={-50}
                  duration={500}
                  className="navbar-link "
                  onClick={() => setMenuIcon(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/chapters"
                  activeclass="active"
                  smooth={"true"}
                  offset={-50}
                  duration={500}
                  className="navbar-link "
                  onClick={() => setMenuIcon(false)}
                >
                  Chapters
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  activeclass="active"
                  smooth={"true"}
                  offset={-50}
                  duration={500}
                  className="navbar-link "
                  onClick={() => setMenuIcon(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mode-toggler flex justify-end items-center mr-3">
            <Toggler />
          </div>
        </div>

        <div className="mobile-navbar">
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
          </div>

          <div className="mobile-logo flex justify-center">
            <NavLink to="/">
              <img
                src={
                  location.pathname === "/"
                    ? !isdarkMode && header
                      ? "/images/logo3.png"
                      : "/images/logo2.png"
                    : !isdarkMode
                    ? "/images/logo3.png"
                    : "/images/logo2.png"
                }
                alt="logo"
              />
            </NavLink>
          </div>

          <div className="mobile-mode-toggler flex justify-end">
            <Toggler />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  padding: 20px;

  .menu_mobile_overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 8001;
    width: 100%;
    height: 100%;
    background-color: #250831;
    opacity: 0.1;
  }
 

  .navbar-container {
    grid-template-columns: 0.5fr 2fr 0.5fr;

    .navbar-link {
      position: relative;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: white;
      padding: 0.5rem 0rem;
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.4s ease;

      &:link,
      &:visited {
        font-size: 1rem;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.orange};
        /* transition: color 0.3s linear;
        border-bottom: 2px solid orange; */
      }

      &:after {
        content: "";
        display: block;
        position: relative;
        z-index: 1;
        top: auto;
        bottom: 0;
        left: 0;
        height: 2px;
        transform: none;
        background-color: ${({ theme }) => theme.colors.orange};
        transition: all 0.2s ease;
        width: 0;
      }
    }

    .navbar-lists {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li {
        padding: 0 20px;
      }
    }

    .mode-toggler {
      font-size: 2rem;
      color: white;
    }
  }

 li:hover > .navbar-link::after {
    width: 100%;
  }

  .mobile-navbar {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  @media (min-width: 980px) {
    .mobile-logo {
      display: none;
    }
    .logo {
      .close-outline {
        display: none;
      }
    }
  }

  @media (max-width: 980px) {
    .mobile-navbar {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      z-index: 9999;
      font-size: 3.2rem;
      border: white;
      .mobile-nav-icon {
        color: white;
      }
    }
    .active .menu_mobile_overlay {
      display: block;
      z-index: 998;
    }
    /* .mode-toggler,
    .logo {
      display: none;
    } */
    .mobile-mode-toggler {
      font-size: 2rem;
      color: white;
    }
    .active .mobile-nav-icon {
      display: none;
      color: white;
      z-index: 9999;
    }
    .active .close-outline {
      display: flex;
    }
    .navbar-container {
      position: fixed;
      width: 50vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgb(37, 8, 49);
      display: flex;
      flex-direction: column;
      /* overflow-y: scroll; */
      visibility: hidden;
      opacity: 0;
      transform: translateX(-100%);
    }

    .active .navbar-container {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      width: 300px;

      .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px 30px 13px 30px;
        margin-bottom: 2rem;
        img {
          width: auto;
          height: 100%;
        }
        .close-outline {
          font-size: 2rem;
          cursor: pointer;
        }
      }
      .navbar-lists {
        justify-content: start;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;
          width: 100%;
          padding: 0 2rem;
          li {
            padding: 1.5rem 0;
            width: 100%;
            border-bottom: 2px solid rgba(95, 44, 112, 0.5);
            .navbar-link {
              font-size: 1.5rem;
              color: white;
              transition: all 0.4s ease;
              &:after {
                content: "";
                display: block;
                position: relative;
                z-index: 1;
                top: auto;
                bottom: 0;
                left: 0;
                height: 2px;
                transform: none;
                background-color: ${({ theme }) => theme.colors.orange};
                transition: all 0.2s ease;
                width: 0;
              }
            }
          }
        }
      }
      .mode-toggler {
        display: none;
      }
    }
  }
`;
