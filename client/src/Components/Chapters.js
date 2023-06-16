import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../Context/Context";
import ChapterBox from "./ChapterBox";

const Chapters = () => {
  const [chapters, setChapters] = useState([]);
  const { chapter } = useGlobalContext();

  useEffect(() => {
    setChapters(chapter);
  }, [chapter]);

  return (
    <Wrapper className="relative">
      <div className="chapter-container m-auto">
        <div className="wrapper flex flex-col justify-center">
          <div className="title mb-10">
            <h1>Chapters</h1>
          </div>

          <div className="grid  gap-3 md:grid-cols-2 chapter-list">
            {chapters &&
              chapters.map((item, index) => {
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
        </div>
      </div>
    </Wrapper>
  );
};

export default Chapters;

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  /* background-color: rgba(250,247,237, 0.1); */

  @media (min-width: 900px) {
    .chapter-container {
      padding: 80px 10rem;
    }
  }
  @media (max-width: 900px) {
    .chapter-container {
      padding: 80px 3rem;
    }
  }
`;
