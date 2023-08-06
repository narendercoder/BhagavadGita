import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import ChapterBox from "./ChapterBox";
import Loading from "./Loading";

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const { chapter, isChapterLoading } = useGlobalContext();

  // console.log(isChapterLoading);

  useEffect(() => {
    setChapters(chapter);
  }, [chapter]);

  return (
    <Wrapper className="relative" id="chapters">
      <div className="chapter-container m-auto">
        <div className="wrapper flex flex-col justify-center">

          {/* title */}
          <div className="title mb-10">
            <h1>Chapters</h1>
          </div>

          {/* chapters */}
          {isChapterLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <div className="grid  gap-3 md:grid-cols-2 chapter-list">
              {chapters.map((item, index) => {
                return (
                  <>
                    <ChapterBox
                      id={item.id}
                      key={index + 1}
                      heading={item.name_transliteration}
                      meaning={item.name_meaning}
                      desc={item.chapter_summary}
                    />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Chapters;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  .title {
    h1 {
      font-size: 2.5em;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.heading.primary};
    }
  }
  /* background-color: rgba(250,247,237, 0.1); */

  @media (min-width: 900px) {
    .chapter-container {
      padding: 0 10rem;
    }
  }
  @media (max-width: 900px) {
    .chapter-container {
      padding: 0 3rem;
    }
  }
`;
