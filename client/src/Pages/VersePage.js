import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import styled from "styled-components";
import { useState } from "react";
import VerseTable from "../Components/VerseTable";
import Loading from "../Components/Loading";

const VersePage = () => {
  const { id, sh } = useParams();
  const [wordMeaning, setWordMeaning] = useState([
    {
      id: "",
      word: "",
      meaning: "",
    },
  ]);

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
    if (Object.keys(verse).length !== 0) {
      const inputString = verse.word_meanings;
      const sentences = inputString.split("; ");
      const arrayOfObjects = sentences.map((sentence, index) => ({
        id: `${index+1}`,
        word: sentence.split("—")[0],
        meaning: sentence.split("—")[1],
      }));
      setWordMeaning(arrayOfObjects);
    }
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
          {/* Conditional rendering based on verse availability */}
            {Object.keys(verse).length !== 0 ? (
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
                        {/* Display chapter introduction */}
                          <div className="chapter-intro flex justify-center flex-col items-center">
                            <div className="chapter-heading  flex justify-center flex-col items-center">
                              <h4 className="font-bold mb-5">
                              {/* Display chapter and verse numbers */}
                                {DefaultLanguage === "hindi" ? (
                                  <>
                                    भगवद्गीता:{" "}
                                    {`अध्याय ${verse.chapter_number}, श्लोक ${verse.verse_number}`}
                                  </>
                                ) : (
                                  <>
                                    Bhagavad Gita:{" "}
                                    {`Chapter ${verse.chapter_number}, Verse ${verse.verse_number}`}
                                  </>
                                )}
                              </h4>
                            </div>
                            {/* Display verse text */}
                            <div className="chapter-slok text-orange-600 text-center font-bold">
                              <p className="text-xl">
                                {/* {verse.text.split("।")[0]} */}
                                {verse.text.split("\n")[0]
                                  ? `${verse.text.split("\n")[0]}`
                                  : ""}
                                <br />
                                {verse.text.split("\n")[2]
                                  ? verse.text.split("\n")[2]
                                  : ""}
                                <br />
                                {verse.text.split("\n")[4]
                                  ? verse.text.split("\n")[4]
                                  : ""}
                              </p>
                            </div>
                           {/* Display verse transliteration */}
                            <div className="transliteration text-center">
                              <p>
                                {verse.transliteration.split("\n")[0]}
                                <br />
                                {verse.transliteration.split("\n")[1]}
                                <br />
                                {verse.transliteration.split("\n")[2]}
                              </p>
                            </div>
                            {/* Display word meanings */}
                            <div className="WordMeanings text-center">
                              <p>
                                {wordMeaning.map((item) => (
                                  <span key={item.id}>
                                    <span className="highlight">
                                      {item.word}
                                      {"—"}
                                    </span>
                                    <span className="meaning">
                                      {item.meaning};{" "}
                                    </span>
                                  </span>
                                ))}
                              </p>
                            </div>
                          </div>
                         {/* Display translation and commentary */}
                          <div className="list-container z-10">
                            <div className="list-items flex flex-col justify-center items-center pb-14">
                              <div className="translation flex flex-col justify-center items-center w-full">
                                <div className="heading mb-3 text-center w-full p-2">
                                  <h3 className=" mb-0">Translation</h3>
                                </div>
                               {/* Map and render translation content */}
                                <div className="description w-full">
                                    {verse.translations.map((item) => {
                                      return (
                                        DefaultLanguage === "hindi" &&
                                        item.language === "hindi" ? (
                                        <div
                                          key={item.id}
                                          className="desc-content mt-6"
                                        >
                                          <div className="title">
                                            <h3 className="text-center font-bold mb-0">
                                              {item.author_name}
                                            </h3>
                                          </div>

                                          <p>
                                            <span className="verseShort">
                                              <u className="font-bold">
                                                BG{" "}
                                                {`${verse.chapter_number}.${verse.verse_number}`}
                                              </u>
                                              {":"}
                                            </span>{" "}
                                            {item.description.split("।")[4]}
                                          </p>
                                        </div>
                                      ) : DefaultLanguage === "english" &&
                                        item.language === "english" ? (
                                        <div
                                          key={item.id}
                                          className="desc-content mt-6"
                                        >
                                          <div className="title">
                                            <h3 className="text-center font-bold mb-0">
                                              {item.author_name}
                                            </h3>
                                          </div>

                                          <p>
                                            <span className="verseShort">
                                              <u className="font-bold">
                                                BG{" "}
                                                {`${verse.chapter_number}.${verse.verse_number}`}
                                              </u>
                                              {":"}
                                            </span>{" "}
                                            {item.description}
                                          </p>
                                        </div>
                                      ) : (
                                        <React.Fragment key={item.id} />
                                      ))
                                    })}
                                 
                                </div>
                              </div>
                               {/* Display commentary */}
                              <div className="commentary flex flex-col justify-center items-center w-full">
                                <div className="heading mb-3 text-center w-full p-2">
                                  <h3 className="mb-0">Commentary</h3>
                                </div>

                                <div className="description w-full ">
                                  {verse.commentaries.map((item) => {
                                    return (
                                      DefaultLanguage === "english" &&
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
                                          <p className="text-gray-400">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    ) : DefaultLanguage === "hindi" &&
                                      item.language === "hindi" ? (
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
                                          <p className="text-gray-500">
                                            {item.description}
                                          </p>
                                        </div>
                                      </div>
                                    ) : (
                                      <React.Fragment key={item.id} />
                                    ))
                                  })}
                                  {/* <p>{verse.commentaries[13].description}</p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                    {/* Render a verse table component */}
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
        color: ${({ theme }) => theme.colors.textgray};
        padding: 1rem;
        font-weight: 500;
      }
    }
    .heading {
      /* color: ${({ theme }) => theme.colors.heading.primary} */
      background-color: ${({ theme }) => theme.colors.orange};
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
            color: ${({ theme }) => theme.colors.textgray};
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
      min-width: 460px;
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
