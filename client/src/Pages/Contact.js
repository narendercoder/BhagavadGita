import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="contact-section my-20" id="contact">
      <div className="custom-container m-10">
        <div className="wrapper">
          <div className="contact flex flex-col justify-center items-center">
            <div className="title flex flex-col justify-center items-center mb-5">
              <h1 className="text-center">
                Have a Question?
                <br/>
                Drop Us a Line!
              </h1>
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
  .contact .title{
    h1{
      font-size: 2.5em;
    }
  }
  .contact-form {
    .group-val {
      padding: 15px;
      
      input {
        width: 100%;
        padding: 0.85em 1.8em;
        color: #96818d;
        background-color: #ffffff;
        border: 2px solid #f6e0ce;
        border-radius: 31px;
        transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        &:focus {
          outline: none;
          color: #694c5c;
          border-color: #db4242 !important;
          background-color: #ffffff;
        }
        &:hover {
          border-color: #fd8f8f;
        }
      }
      textarea {
        width: 100%;
        height: 300px;
        padding: 0.85em 1.8em;
        color: #96818d;
        background-color: #ffffff;
        border: 2px solid #f6e0ce;
        border-radius: 31px;
        transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        &:focus {
          outline: none;
          color: #694c5c;
          border-color: #db4242 !important;
          background-color: #ffffff;
        }
        &:hover {
          border-color: #fd8f8f;
        }
      }
    }
  }
`;
