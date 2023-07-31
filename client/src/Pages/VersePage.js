import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import styled from "styled-components";
import { useState } from "react";
import VerseTable from "../Components/VerseTable";
import Loading from "../Components/Loading";
import MenuList from "../Components/MenuList";

const VersePage = () => {
  const [showVerse, setShowVerse] = useState({});
  const { id, sh } = useParams();

  const {
    GetVerse,
    verse,
    isVerseLoading,
    GetSingleChapter,
    singleChapter,
    GetAllVerses,
    DefaultLanguage,
  } = useGlobalContext();

  // const description = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].author_name === "Swami Adidevananda") {
  //       return arr[i].description;
  //     }
  //   }
  // };

  // const EnglishTranslation = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].language === "english") {
  //       return arr[i].description;
  //     }
  //   }
  // };

  // const HindiTranslation = (arr) => {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i].language === "hindi") {
  //       return arr[i].description;
  //     }
  //   }
  // };

  useEffect(() => {
    setShowVerse(verse);
  }, [verse]);

  useEffect(() => {
    GetSingleChapter(`${id}`);
    GetVerse(`${id}/slok/${sh}`);
    GetAllVerses(`${id}/slok`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, sh]);

  return (
    <>
      <Wrapper>
        <div className="wrapper px-0 xl:px-20 py-3">
          <div className="chapter-container px-8 md:px-10 xl:px-20 ">
            {Object.keys(showVerse).length !== 0 ? (
              <>
                <div className="custom-container flex justify-center">
                  <div className="inner-container">
                    <div className="main-section flex justify-center flex-col">
                      {isVerseLoading ? (
                        <>
                          <Loading />
                        </>
                      ) : (
                        <>
                          <MenuList />
                          <div className="chapter-intro flex justify-center flex-col items-center">
                            <div className="chapter-heading  flex justify-center flex-col items-center">
                              <h4 className="font-bold mb-5">
                                {DefaultLanguage === "hindi" ? (
                                  <>
                                    भगवद्गीता:{" "}
                                    {`अध्याय ${showVerse.chapter_number}, श्लोक ${showVerse.verse_number}`}
                                  </>
                                ) : (
                                  <>
                                    Bhagavad Gita:{" "}
                                    {`Chapter ${showVerse.chapter_number}, Verse ${showVerse.verse_number}`}
                                  </>
                                )}
                              </h4>
                            </div>

                            <div className="chapter-slok text-orange-600 text-center font-bold">
                              <p className="text-xl">
                                {/* {showVerse.text.split("।")[0]} */}
                                {showVerse.text.split("\n")[0]
                                  ? `${showVerse.text.split("\n")[0]}`
                                  : ""}
                                <br />
                                {showVerse.text.split("\n")[2]
                                  ? showVerse.text.split("\n")[2]
                                  : ""}
                                <br />
                                {showVerse.text.split("\n")[4]
                                  ? showVerse.text.split("\n")[4]
                                  : ""}
                              </p>
                            </div>

                            <div className="transliteration text-center">
                              <p>
                                {showVerse.transliteration.split("\n")[0]}
                                <br />
                                {showVerse.transliteration.split("\n")[1]}
                                <br />
                                {showVerse.transliteration.split("\n")[2]}
                              </p>
                            </div>

                            <div className="WordMeanings text-center">
                              <p>
                                {showVerse.word_meanings
                                  .split(";")
                                  .map((item, index) => {
                                    return (
                                      <>
                                        <span className="highlight">
                                          {item.split("—")[0]}
                                          {"—"}
                                        </span>
                                        <span className="meaning">
                                          {item.split("—")[1]};
                                        </span>
                                      </>
                                    );
                                  })}
                              </p>
                            </div>
                          </div>

                          <div className="list-container z-10">
                            <div className="list-items flex flex-col justify-center items-center pb-14">
                              <div className="translation flex flex-col justify-center items-center w-full">
                                <div className="heading mb-3 text-center w-full p-2">
                                  <h3 className=" mb-0">Translation</h3>
                                </div>

                                <div className="description w-full">
                                  <>
                                    {showVerse.translations.map(
                                      (item, index) => {
                                        return (
                                          <>
                                            {DefaultLanguage === "hindi" &&
                                            item.language === "hindi" ? (
                                              <>
                                                <div
                                                  key={item.id}
                                                  className="desc-content mt-3"
                                                >
                                                  <div className="title">
                                                    <h3 className="text-center font-bold">
                                                      {item.author_name}
                                                    </h3>
                                                  </div>

                                                  <p>
                                                    <span className="verseShort">
                                                      <u className="font-bold">
                                                        BG{" "}
                                                        {`${showVerse.chapter_number}.${showVerse.verse_number}`}
                                                      </u>
                                                      {":"}
                                                    </span>{" "}
                                                    {
                                                      item.description.split(
                                                        "।"
                                                      )[4]
                                                    }
                                                  </p>
                                                </div>
                                              </>
                                            ) : DefaultLanguage === "english" &&
                                              item.language === "english" ? (
                                              <>
                                                <div
                                                  key={item.id}
                                                  className="desc-content mt-3"
                                                >
                                                  <div className="title">
                                                    <h3 className="text-center font-bold">
                                                      {item.author_name}
                                                    </h3>
                                                  </div>

                                                  <p>
                                                    <span className="verseShort">
                                                      <u className="font-bold">
                                                        BG{" "}
                                                        {`${showVerse.chapter_number}.${showVerse.verse_number}`}
                                                      </u>
                                                      {":"}
                                                    </span>{" "}
                                                    {item.description}
                                                  </p>
                                                </div>
                                              </>
                                            ) : (
                                              <></>
                                            )}
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                </div>
                              </div>

                              <div className="commentary flex flex-col justify-center items-center w-full">
                                <div className="heading mb-3 text-center w-full p-2">
                                  <h3 className="mb-0">Commentary</h3>
                                </div>

                                <div className="description w-full">
                                  {showVerse.commentaries.map((item, index) => {
                                    return (
                                      <>
                                        {DefaultLanguage === "english" &&
                                        item.language === "english" ? (
                                          <div
                                            key={item.id}
                                            className="desc-content mt-3"
                                          >
                                            <div className="title">
                                              <h3 className="text-center font-bold">
                                                {item.author_name}
                                              </h3>
                                            </div>
                                            <div className="content">
                                              <p>{item.description}</p>
                                            </div>
                                          </div>
                                        ) : DefaultLanguage === "hindi" &&
                                          item.language === "hindi" ? (
                                          <>
                                            <div
                                              key={item.id}
                                              className="desc-content mt-3"
                                            >
                                              <div className="title">
                                                <h3 className="text-center font-bold">
                                                  {item.author_name}
                                                </h3>
                                              </div>
                                              <div className="content">
                                                <p>{item.description}</p>
                                              </div>
                                            </div>
                                          </>
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    );
                                  })}
                                  {/* <p>{showVerse.commentaries[13].description}</p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <VerseTable singleChapter={singleChapter} id={id} sh={sh} />
                </div>
              </>
            ) : (
              <>
                <Loading />
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default VersePage;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  margin-top: 80px;
  background: url("/images/bg3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.gradient.primary};
    padding-bottom: 3rem;
  }

  .inner-container {
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      height: 30px;
      width: 100%;
      z-index: 2;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      height: 30px;
      width: 100%;
      z-index: 2;
    }
  }

  .main-section {
    position: relative;
    padding: 3em 1em;
    height: 100%;
    overflow-y: scroll;
    z-index: 1;
  }

  /* background-color: #f7f7fc; */
  .chapter-intro {
    padding-top: 1em;
    position: relative;
    z-index: 2;
    .chapter-heading {
      position: relative;
      width: 100%;
      height: 100%;
      h4 {
        color: ${({ theme }) => theme.colors.heading.primary};
        font-size: 1.4em;
      }
    }
    .chapter-slok {
      p {
        color: rgb(255, 152, 0);
        line-height: 2rem;
      }
    }
    .transliteration {
      p {
        color: ${({ theme }) => theme.colors.heading.primary};
        font-family: "Noto Serif", serif;
        font-style: italic;
      }
    }
    .WordMeanings {
      padding: 1em;
      .highlight {
        font-style: italic;
        color: ${({ theme }) => theme.colors.highlight.secondary};
      }
      p {
        color: ${({ theme }) => theme.colors.heading.secondary};
      }
      span {
        font-weight: 500;
        font-family: "Noto Serif", serif;
      }
    }
    p {
      margin: 0 0 20px;
    }
  }

  .list-container {
    .verseShort {
      font-family: cursive;
      color: #000000;
      background-color: rgb(255, 152, 0);
    }
    .translation {
      p {
        color: ${({ theme }) => theme.colors.heading.primary};
        padding: 1rem;
        font-weight: 500;
      }
    }
    .heading {
      /* color: ${({ theme }) => theme.colors.heading.primary} */
      background-color: orange;
      h3 {
        font-size: 1.5em;
        font-weight: 700;
      }
    }
    .translation,
    .commentary {
      .description {
        h3 {
          color: ${({ theme }) => theme.colors.heading.primary};
          font-size: 1.5rem;
        }
      }
    }
    .commentary {
      .description {
        .desc-content {
          p {
            color: ${({ theme }) => theme.colors.heading.primary};
            line-height: 2em;
            padding: 1rem;
            font-weight: 500;
          }
        }
      }
    }
  }

  @media (min-width: 750px) {
    .inner-container {
      max-width: 74%;
      min-width: 100vh;
      min-height: 100%;
    }
  }

  @media (max-width: 750px) {
    .custom-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
