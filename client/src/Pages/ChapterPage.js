import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Shlok from "../Components/Shlok";
import styled from "styled-components";
import VerseTable from "../Components/VerseTable";
import Loading from "../Components/Loading";

const ChapterPage = () => {
  // Extract the "id" parameter from the URL
  const { id } = useParams();

  // Initialize state variables
  const [showChapter, setShowChapter] = useState({});
  const [showChapterVerses, setShowChapterVerses] = useState([]);

 // Extract data from the global context using the useGlobalContext hook
  const {
    GetSingleChapter,
    singleChapter,
    GetAllVerses,
    chapterVerses,
    isVersesLoading,
    isSingleLoading,
    DefaultLanguage
  } = useGlobalContext();

  
  // console.log(showChapterVerses)

  // Update showChapter state when singleChapter changes
  useEffect(() => {
    setShowChapter(singleChapter);
  }, [singleChapter]);

  // Update showChapterVerses state when chapterVerses changes
  useEffect(() => {
    setShowChapterVerses(chapterVerses);
  }, [chapterVerses]);

  // Fetch single chapter details and verses when component mounts or id changes
  useEffect(() => {
    GetSingleChapter(`${id}`);
    GetAllVerses(`${id}/slok`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Wrapper id="chapter">
        <div className="chapter-container px-0 xl:px-20 py-3">
          <div className="wrapper px-8 md:px-10 xl:px-20">
          <div className="custom-container flex justify-center">
            <div className="inner-container">
            <div className="main-section overflow-hidden flex flex-col">
              {isSingleLoading ? (
                <>
                  <Loading />
                </>
              ) : (
                <>
                  <div className="relative chapter-intro pt-20 pb-10 flex justify-center flex-col items-center">
                  {/* Display chapter title based on language */}
                    <div className="chapter-heading mb-3 flex justify-center flex-col items-center">
                      <h3 className="font-bold mb-0">
                        {
                          DefaultLanguage === "hindi" ?  <>
                          <span className="text-2xl">अध्याय {id}{" "}:{" "}</span>{showChapter.name}
                          </>
                          :
                          <>
                          <span className="text-2xl">Chapter {id}{" "}:{" "}</span>{showChapter.name_transliterated}
                          </>
                        }
                      </h3>
                    </div>
                     {/* Display chapter summary based on language */}
                    <div className="chapter-summary">
                      <p>
                        {Object.keys(showChapter).length !== 0
                          ? <>
                            {
                              DefaultLanguage === "hindi" ? <>{showChapter.chapter_summary_hindi}</>  : <>{showChapter.chapter_summary}</>
                            }
                          </>
                          : ""
                          }
                      </p>
                    </div>
                  </div>
                  {/* Display list of verses */}
                  <div className="list-container z-10" id="list">
                    <div className="list-items pb-14">
                      {!isVersesLoading ? (
                        <>
                         {/* Display total verse count */}
                          <div className="search-item py-5 mb-5 text-center">
                            <span className="font-bold text-xl">
                              {
                                DefaultLanguage === "hindi" ? <>{showChapterVerses.length} {`श्लोक`}</> : <>{showChapterVerses.length} Verses</>
                              }
                            </span>
                          </div>
                          {/* Map and render each verse */}
                          {showChapterVerses.map((item, index) => {
                            return (
                                <Shlok
                                  key={item.id}
                                  chapterVerse = {item}
                                  DefaultLanguage={DefaultLanguage}
                                />
                            );
                          })}
                        </>
                      ) : (
                        <>
                          <Loading />
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
            </div>
            {/* Render a verse table component */}
            <VerseTable
              singleChapter={singleChapter}
              id={id}
              showChapterVerses={showChapterVerses}
            />
          </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ChapterPage;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  margin-top: 80px;
  background: url("/images/bg3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  
  .chapter-container{
    background: ${({ theme }) => theme.colors.gradient.primary};
    padding-bottom: 3rem;
  }

  .inner-container{
    position: relative;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg.primary};
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    &::before{
       content: "";
       position: absolute;
       top: 0;
       left: 0;
       background-color: ${({ theme }) => theme.colors.bg.primary};
       height: 30px;
       width: 100%;
       z-index: 2;

    }
    &::after{
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

  .search-item{
    span{
      color: ${({ theme }) => theme.colors.heading.primary};
    }
  }

  .main-section {
    position: relative;
    padding: 30px 1em 1em 1em;
    overflow-y: scroll;
    height: 100vh;
    z-index: 1;
  }
 

  .chapter-intro {
    padding-top: 2em;
    position: relative;
    z-index: 2;
  }
  .chapter-heading {
    position: relative;
    width: 100%;
    height: 100%;
    h3 {
        font-size: 1.5em;
        color: ${({ theme }) => theme.colors.highlight.primary};
      }
  }
  .chapter-summary {
    line-height: 30px;
    p{
      padding: 1em;
      color: ${({ theme }) => theme.colors.heading.secondary};
    }
  }
  .list-container {
    .search-item {
      position: relative;
     &::before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.border.primary};
      width: 100%;
      height: 2px;
     }
     &:after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${({ theme }) => theme.colors.border.primary};
      width: 100%;
      height: 2px;
     }
    }
  }
  .shapes {
    position: absolute;
    top: 10%;
    left: 25%;
    z-index: -1;
    .shape {
      top: 0%;
      left: 0%;
      img {
        width: 451px;
        height: 100%;
        /* opacity: 0.46; */
      }
    }
  }

  @media (min-width: 750px) {
    .inner-container {
      max-width: 74%;
      min-width: 70%;
      min-height: 100vh;
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
