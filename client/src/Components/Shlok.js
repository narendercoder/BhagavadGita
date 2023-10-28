import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Shlok = ({ chapterVerse, DefaultLanguage }) => {



  // Function to determine the appropriate description based on language and author name
  const description = useCallback(
    (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (
          DefaultLanguage === "english" &&
          arr[i].author_name === "Swami Adidevananda"
        ) {
          return arr[i].description;
        } else if (
          DefaultLanguage === "hindi" &&
          arr[i].author_name === "Swami Tejomayananda"
        ) {
          return arr[i].description;
        }
      }
    },
    [DefaultLanguage]
  );

  const desc = useMemo(
    () => description(chapterVerse.translations),
    [description, chapterVerse]
  );


  return (
    <Wrapper className="relative">
      <div className="shlok">
        <div className="flex flex-col justify-between">
          <div className="flex justify-center items-center title">
            <Link
              to={`/chapter/${chapterVerse.chapter_number}/slok/${chapterVerse.verse_number}`}
              className="relative w-full"
            >
              <h4 className="mb-0 text-center">
                {DefaultLanguage === "hindi" ? (
                  <>{`भगवद्गीता ${chapterVerse.chapter_number}.${chapterVerse.verse_number}`}</>
                ) : (
                  <>{`Bhagavad Gita ${chapterVerse.chapter_number}.${chapterVerse.verse_number}`}</>
                )}
              </h4>

              <span className="open absolute float-right">
                {`view `}
                <span className="viewCommentaryText">commentary</span>
                {` >>`}
              </span>
            </Link>
          </div>
          <div className="description">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shlok;

const Wrapper = styled.div`
  .shlok {
    padding-bottom: 0.5em;
    .title {
      /* background-color: #ffc071; */
      background-color: ${({ theme }) => theme.colors.orange};
      /* color: ${({ theme }) => theme.colors.heading.primary}; */
      /* color: ${({ theme }) => theme.colors.highlight.primary}; */
      margin-bottom: 10px;
      padding: 12px 0;
      .open {
        top: 0;
        right: 1rem;
      }
      a {
        &:hover {
          .open {
            display: inline;
            text-decoration: underline;
          }
        }
        .open {
          display: none;
        }
      }
    }
    .description {
      p {
        color: ${({ theme }) => theme.colors.heading.secondary};
        margin: 20px 0;
        padding: 0 1em;
        font-size: 1.1em;
      }
    }
  }
  @media screen and (max-width: 720px) {
    .viewCommentaryText {
      display: none;
    }
  }
  @media screen and (min-width: 720px) {
    .viewCommentaryText {
      display: inline;
    }
  }
`;
