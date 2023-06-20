import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {BiChevronRight}  from "react-icons/bi"
import {AiFillGithub, AiFillInstagram, AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <Wrapper
      className="footer relative overflow-hidden flex flex-col justify-center items-center"
      id="footer"
    >
      <div className="footer-container px-10 sm:px-3">
        <div className="wrapper grid sm:grid-cols-3 gap-2">

          <div className="logo p-5">
            <div className="mb-5">
              <a href="/">
                <img src="/images/logo2.png" alt="logo" />
              </a>
            </div>
            <div className="heading">
              <p>
                Bhagavad Gita is a practical guide to one's life that guides you
                to re-organise your life, achieve inner peace and approach the
                Supreme Lord (the Ultimate Reality)
              </p>
            </div>
          </div>

          <div className="footer-link sm:mx-10 p-5 flex flex-col">
            <div className="mb-2">
              <h1 className="text-xl font-bold">USEFUL LINKS</h1>
            </div>
            <ul>
              <li>
                <Link to="/" className="flex items-center">
                <span className="link-icon"><BiChevronRight/></span>
                <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="About" className="flex items-center">
                <span className="link-icon"><BiChevronRight/></span>
                <span>About us</span></Link>
              </li>
              <li>
                <Link to="Contact" className="flex items-center">
                  <span className="link-icon"><BiChevronRight/></span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-link p-5 flex flex-col">
            <div className="mb-2">
              <h1 className="text-xl font-bold">FOLLOW US</h1>
            </div>
            <ul>
              <li>
                <Link className="flex items-center">
                <span className="link-icon"><AiFillInstagram/></span>
                <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center">
                <span className="link-icon"><AiFillLinkedin/></span>
                <span>Linkedin</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center">
                <span className="link-icon"><AiFillGithub/></span>
                <span>Github</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom w-full flex flex-col justify-center items-center">
          <div className="mb-10 w-full">
            <div className="footer-bottom-line"></div>
          </div>
          <span>
            @ 2021 All rights reserved | Designed With 💙 By{" "}
            <a href="https://www.linkedin.com/in/narender-singh-bisht-4529051b7/" className=" text-sm font-bold ">
              Narender Singh Bisht
            </a>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  width: 100vw;
  height: 100%;
  /* background-color: #1D0427; */
  background-color: rgb(30, 30, 37);

  .footer-container {
    padding-top: 25px;
    padding-bottom: 25px;
    max-width: 1000px;
    .logo{
      .heading{
        max-width: 30rem;
        color: #BCB4BF;
      }
      
    }

    .footer-link{
      h1{
        color: white;
      }
    }

    ul {
      li {
        cursor: pointer;
        margin: 0 0 13px;
        color: #BCB4BF;
        span{
          
          margin-bottom: 0;
        }
        .link-icon{
          font-size: 1.2rem;
          font-weight: 700;
          margin-right: 0.2rem;
          color: orange;
        }
        &:hover{
          color: orange;
          text-decoration: underline;
        }
        a {
          font-size: 1rem;
        }

      }
    }

    .footer-bottom {
      color: white;
      .footer-bottom-line{
        border-top: 1px solid #BCB4BF;
      }
      a{
        color: orange
      }
    }
  }
`;
