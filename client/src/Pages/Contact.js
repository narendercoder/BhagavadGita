import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useGlobalContext } from "../Context/Context";

const Contact = () => {
  const { isdarkMode } = useGlobalContext();

  // Initialize form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check for empty fields
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      return toast.error("Please fill all the Details.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isdarkMode ? "dark" : "light",
      });
      
    }

     // Prepare form data
    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send form data to the backend
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/contact`,
        data
      );
  
      // Show success notification
      if (res.data.success === true) {
        toast.success("Thank You! Your Message has been sent sucessfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: isdarkMode ? "dark" : "light",
        });
      }
  
       // Clear form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // Handle error here (display an error toast, etc.)
      toast.error("There is a error in form submission", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: isdarkMode ? "dark" : "light",
      });
    }
  };

  return (
    <Wrapper className="relative contact-section" id="contact">
      <div className="custom-container p-10">
        <div className="wrapper mt-32 md:mt-20">
          
          <div className="contact py-20 mx-auto justify-center items-center" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-wrapper flex flex-col justify-center items-center">
              <div className="title flex flex-col justify-center items-center mb-5">
                <div>
                  <h1 className="orange">Have </h1>
                  <span className="white"> a Question?</span>
                  <br />
                  <h1 className="white">Drop Us a</h1>
                  <span className="orange"> Line!</span>
                </div>
              </div>

              <div className="contact-form">
                <div className="wrapper">
                  <form
                    method="post"
                    noValidate="novalidate"
                    autoComplete="off"
                  >
                    <div className="grid grid-cols-2 place-items-center">
                      <div className="group-val">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name*"
                          onChange={handleChange}
                          value={formData.name}
                          autoComplete="off"
                          required
                        ></input>
                        <span className="line bg-gray-300"></span>
                      </div>
                      <div className="group-val">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          onChange={handleChange}
                          value={formData.email}
                          autoComplete="off"
                          required
                        ></input>
                        <span className="line bg-gray-300"></span>
                      </div>
                      <div className="group-val col-span-2">
                        <textarea
                          type="text"
                          name="message"
                          rows="10"
                          cols="40"
                          placeholder="Your Message*"
                          onChange={handleChange}
                          value={formData.message}
                          autoComplete="off"
                          required
                        ></textarea>
                        <span className="line bg-gray-300"></span>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="submit-btn col-span-1 w-40 border-2 border-orange-500 hover:bg-orange-500 p-3 my-0 mx-auto flex justify-center items-center rounded-md hover:scale-110 duration-300"
                    >
                      Submit
                    </button>
                  </form>
                </div>
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
  position: relative;
  width: 100vw;
  height: 100%;
  /* background-color: #faf7ed; */
  .contact .title {
    .white {
      display: inline;
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 700;
      line-height: 1.2;
      color: ${({ theme }) => theme.colors.heading.primary};
      font-size: 2.5em;
    }
    .orange {
      display: inline;
      margin-top: 0;
      margin-bottom: 0.5rem;
      font-weight: 700;
      line-height: 1.2;
      font-size: 2.5em;
      color: ${({ theme }) => theme.colors.orange};
    }
  }
  .submit-btn {
    color: ${({ theme }) => theme.colors.heading.primary};
    &:hover {
      color: white;
    }
  }

  .contact {
    .contact-wrapper {
      .title {
        min-width: 700px;
        letter-spacing: 5px;
      }
      .contact-form {
        min-width: 375px;
        .group-val {
          width: 100%;
          padding: 15px;
          input {
            width: 100%;
            padding: 1em 1.8em;
            color: ${({ theme }) => theme.colors.heading.primary};
            background-color: transparent;
            /* background-color: ${({ theme }) => theme.colors.bg.primary}; */
            /* border: 2px solid ${({ theme }) =>
              theme.colors.border_color.primary};
        border-radius: 31px; */
            transition: color 0.3s ease, background-color 0.3s ease,
              border-color 0.3s ease;
            outline: none;
            &:focus {
              outline: none;
              /* color: #694c5c;
          border-color: orange !important; */
              /* background-color: ${({ theme }) => theme.colors.bg.primary}; */
            }
            &:hover {
              border-color: ${({ theme }) => theme.colors.orange};
            }
          }

          input:hover+.line::before{
             width: 100%;
          }
          textarea:hover+.line::before{
             width: 100%;
          }

          .line {
            display: block;
            height: 1.1px;
            width: 100%;
            position: relative;
            transition: all 0.4s ease;
            z-index: 1;
            margin-top: -1px;
            &:before {
              content: "";
              display: block;
              width: 0;
              height: 1.1px;
              position: absolute;
              left: 0;
              top: 0;
              z-index: 1;
              background-color: ${({ theme }) => theme.colors.orange};
              transition: all 0.4s ease;
            }
          }

          textarea {
            width: 100%;
            height: 50px;
            resize: none;
            min-height: 45px;
            padding: 0.85em 1.8em;
            background-color: transparent;
            color: ${({ theme }) => theme.colors.heading.primary};
            /* background-color: ${({ theme }) => theme.colors.bg.primary}; */
            /* border: 2px solid ${({ theme }) =>
              theme.colors.border_color.primary};
             border-radius: 31px; */
            transition: color 0.3s ease, background-color 0.3s ease,
              border-color 0.3s ease;
            &:focus {
              outline: none;
              /* color: #694c5c;
              border-color: orange !important; */
              /* background-color: ${({ theme }) => theme.colors.bg.primary}; */
            }
            &:hover {
              border-color: orange;
            }
          }
        }
      }
    }
  }
`;
