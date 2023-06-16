import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { useParams } from "react-router-dom";
import Shlok from "../Components/Shlok";
import styled from "styled-components";
import Header from "../Components/Header";

const url = "http://localhost:4000/chapter";

const ChapterPage = () => {
  const { id } = useParams();
  const [showChapter, setShowChapter] = useState({});
  const [showChapterVerses, setShowChapterVerses] = useState([]);

  const { GetSingleChapter, singleChapter, GetAllVerses, chapterVerses } =
    useGlobalContext();

  const description = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].author_name == "Swami Adidevananda") {
        return arr[i].description;
      }
    }
  };
  // console.log(showChapterVerses)
  useEffect(() => {
    setShowChapter(singleChapter);
  }, [singleChapter]);

  useEffect(() => {
    setShowChapterVerses(chapterVerses);
  }, [chapterVerses]);

  useEffect(() => {
    GetSingleChapter(`${url}/${id}`);
    GetAllVerses(`${url}/${id}/slok`);
  }, []);

  return (
    <>
    <Header header={true} />
    <Wrapper className="px-0 xl:px-40">
      <div className="chapter-container bg-white px-10 md:px-15 xl:px-40 ">
        <div className="wrapper flex justify-center flex-col items-center">
          <div className="chapter-intro py-20 flex justify-center flex-col items-center">
            <div className="chapter-heading  flex justify-center flex-col items-center">
              <h4 className="text-sm text-orange-500">Chapter {id}</h4>
              <div className="chapter-name mb-5">
                <h2 className="font-bold">{showChapter.name_transliterated}</h2>
              </div>
            </div>

            <div className="chapter-summary">
              <p>
              {Object.keys(showChapter).length !== 0
                ? showChapter.chapter_summary
                : ""}
              </p>
            </div>

            <div className="shapes absolute w-full h-full">
              <div className="shape">
                <img src="/images/group.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="list-container z-10">

            <div className="search-item py-5 mb-5">
              <span className="font-bold text-xl">
              {showChapterVerses.length} Verses
              </span>
            </div>

            <div className="list-items pb-14">
              {showChapterVerses.length !== 0 ? (
                <>
                  {showChapterVerses.map((item, index) => {
                    return (
                      <>
                        <Shlok
                          id={item.id}
                          verseNumber={item.verse_number}
                          chapter={item.chapter_number}
                          description={description(item.translations)}
                        />
                      </>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </div>
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
  margin-top: 40px;
  /* background-color: #f7f7fc; */
  .chapter-intro {
    position: relative;
    z-index: 2;
  }
  .chapter-heading {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .chapter-summary{
   line-height: 30px;
  }
  .list-container{
    .search-item{
         border-top: 1px solid #E5E7EB;
         border-bottom: 1px solid #E5E7EB;
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
`;
