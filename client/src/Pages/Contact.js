import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="relative contact-section" id="contact">
      <div className="custom-container m-10">
        <div className="wrapper">
        {/* border */}
        <div className="relative w-full h-full mb-10">
            <img src="./images/border1.png" alt="border" />
          </div>
          <div className="contact flex flex-col justify-center items-center">
            <div className="title flex flex-col justify-center items-center mb-5">
              <div className="text-center">
                <h1 className="orange">Have{" "}</h1>
                <span className="white"> a Question?</span>
                <br />
                <h1 className="white">Drop Us a</h1>
                <span className="orange">{" "}Line!</span>
              </div>
            </div>

            <div className="contact-form">
              <div className="wrapper">
                <form action="" method="post" noValidate="novalidate">
                  <div className="grid grid-cols-2 place-items-center">
                    <div className="group-val">
                      <input
                        type="text"
                        name="Name"
                        placeholder="Name*"
                        // value={""}
                        // onChange={"a"}
                      ></input>
                    </div>
                    <div className="group-val">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email*"
                        // value={""}
                        // onChange={""}
                      ></input>
                    </div>
                  </div>
                  <div className="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      // value={""}
                      // onChange={""}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.section`
  width: 100vw;
  height: 100%;
  .contact .title {
    .white{
      display: inline;
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.heading.primary};
      font-size: 2.5em;
    }
    .orange{
      display: inline;
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 700;
      line-height: 1.2;
      font-size: 2.5em;
      color: orange;
    }
  }
  .contact-form {
    .group-val {
      padding: 15px;

      input {
        width: 100%;
        padding: 0.85em 1.8em;
        color: #96818d;
        background-color: ${({ theme }) => theme.colors.bg.primary};
        border: 2px solid ${({ theme }) => theme.colors.border_color.primary};
        border-radius: 31px;
        transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        outline: none;
        &:focus {
          outline: none;
          color: #694c5c;
          border-color: #db4242 !important;
          background-color: ${({ theme }) => theme.colors.bg.primary};
        }
        &:hover {
          border-color: #fd8f8f;
        }
      }
      textarea {
        width: 100%;
        min-height: 300px;
        padding: 0.85em 1.8em;
        color: #96818d;
        background-color: ${({ theme }) => theme.colors.bg.primary};
        border: 2px solid ${({ theme }) => theme.colors.border_color.primary};;
        border-radius: 31px;
        transition: color 0.3s ease, background-color 0.3s ease,
          border-color 0.3s ease;
        &:focus {
          outline: none;
          color: #694c5c;
          border-color: #db4242 !important;
          background-color: ${({ theme }) => theme.colors.bg.primary};
        }
        &:hover {
          border-color: #fd8f8f;
        }
      }
    }
  }
`;
