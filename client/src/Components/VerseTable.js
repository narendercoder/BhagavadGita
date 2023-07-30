import React from "react";
import styled from "styled-components";
import ChapterBtn from "../Styles/ChapterBtn";
import { useGlobalContext } from "../Context/Context";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";

const VerseTable = ({ singleChapter }) => {
  const { id, sh } = useParams();
  const { chapterVerses, isVersesLoading, DefaultLanguage } = useGlobalContext();

  return (
    <Wrapper>
      <aside className="right-section">
        <div className="right-content">
          <div className="coverImg">
            <img src={`/images/${id}.jpg`} alt="img" />
          </div>
          <div className="chapterTitle text-center">
            <h4>{
              DefaultLanguage === "hindi" ? <>
              {`${id}. ${singleChapter.name}`}
              </> : <>
              {`${id}. ${singleChapter.name_transliterated}`}
              </>
            }</h4>
          </div>
          <ChapterBtn id={id} />

          <div className="verseTable">
            {!isVersesLoading ? (
              chapterVerses.map((item, index) => {
                return (
                  <>
                    <Link
                      key={index}
                      to={`/chapter/${id}/slok/${index + 1}`}
                      className={
                        sh === index + 1 ? "verse-count active" : "verse-count"
                      }
                    >
                      <span>{index + 1}</span>
                    </Link>
                  </>
                );
              })
            ) : (
              <>
                <Loading />
              </>
            )}
          </div>
        </div>
      </aside>
    </Wrapper>
  );
};

export default VerseTable;

const Wrapper = styled.div`
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .right-section {
    padding: 1em;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bg.primary};

    .coverImg {
      margin-bottom: 0.5em;
      img {
        width: 100%;
      }
    }

    .chapterTitle {
      h4 {
        color: ${({ theme }) => theme.colors.heading.primary};
        font-size: 1.2em;
      }
    }
  }
  .verseTable {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .verse-count {
      text-align: center;
      border: 1px solid #999;
      background-color: ${({ theme }) => theme.colors.bg.primary};
      cursor: pointer;
      color: ${({ theme }) => theme.colors.heading.primary};
      &:hover {
        span {
          color: white;
        }
        background-color: #ffc071;
        text-decoration: none;
      }
    }
    .verse-count.active {
      background-color: orange;
      text-decoration: none;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 960px) {
    .verse-count {
      width: 10%;
      margin-right: 1%;
      margin-bottom: 1.2987%;
    }
  }

  @media screen and (min-width: 960px) {
    .verse-count {
      width: 15.58442%;
      margin-right: 1%;
      margin-bottom: 1.2987%;
    }
  }

  @media (min-width: 750px) {
    max-width: 24%;
    min-width: 250px;
    margin-left: 1rem;
  }
`;
