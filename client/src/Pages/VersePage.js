import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import styled from "styled-components";
import { useState } from "react";
import Header from "../Components/Header";

const url = "http://localhost:4000/chapter";
const VersePage = () => {
  const [showVerse, setShowVerse] = useState({});
  const { id, sh } = useParams();
  const { GetVerse, verse } = useGlobalContext();



  const description = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].author_name == "Swami Adidevananda") {
        return arr[i].description;
      }
    }
  };

  useEffect(() => {
    setShowVerse(verse);
  }, [verse]);

  useEffect(() => {
    GetVerse(`${url}/${id}/slok/${sh}`);
  }, []);

  return (
    <>
      <Header header={true} />
      <Wrapper className="px-0 xl:px-40">
        {Object.keys(showVerse).length !== 0 ? (
          <>
            <div className="chapter-container bg-white px-10 md:px-15 xl:px-40 ">
              <div className="wrapper flex justify-center flex-col items-center pt-32">
                <div className="chapter-intro flex justify-center flex-col items-center">
                  <div className="chapter-heading  flex justify-center flex-col items-center">
                    <h4 className=" text-3xl font-bold mb-5">
                    Bhagavad Gita:{" "}
                      {`Chapter ${showVerse.chapter_number}, Verse ${showVerse.verse_number}`}
                    </h4>
                  </div>

                  <div className="chapter-slok text-orange-600 text-center font-bold">
                    <p className="text-xl">
                      {showVerse.text.split("\n")[0]}
                      {" ।"}
                      <br />
                      {showVerse.text.split("\n")[2]}
                      <br />
                      {showVerse.text.split("\n")[4]}
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
                    {
                      showVerse.word_meanings.split(";").map((item,index)=>{
                        return (
                         <>
                           <span className="highlight">
                            {item.split("—")[0]}{"—"}
                            </span>
                            <span className="meaning">
                            {item.split("—")[1]};
                            </span>
                         </>
                        )
                      })
                    }
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
                        <p>
                          <span className="verseShort">
                            <u>BG 1.1</u>
                            {":"}
                          </span>
                          {" "}{description(showVerse.translations)}
                        </p>
                      </div>
                    </div>

                    <div className="commentary flex flex-col justify-center items-center w-full">
                      <div className="heading mb-3 text-center w-full p-2">
                        <h3 className="mb-0">Commentary</h3>
                      </div>

                      <div className="description w-full">
                        <p>
                          The two armies had gathered on the battlefield of
                          Kurukshetra, well prepared to fight a war that was
                          inevitable. Still, in this verse, King Dhritarashtra
                          asked Sanjay, what his sons and his brother Pandu’s
                          sons were doing on the battlefield? It was apparent
                          that they would fight, then why did he ask such a
                          question? The blind King Dhritarashtra’s fondness for
                          his own sons had clouded his spiritual wisdom and
                          deviated him from the path of virtue. He had usurped
                          the kingdom of Hastinapur from the rightful heirs; the
                          Pandavas, sons of his brother Pandu. Feeling guilty of
                          the injustice he had done towards his nephews, his
                          conscience worried him about the outcome of this
                          battle. The words dharma kṣhetre, the land of dharma
                          (virtuous conduct) used by Dhritarashtra depict the
                          dilemma he was experiencing. Kurukshetra is described
                          as kurukṣhetraṁ deva yajanam in the Shatapath Brahman,
                          the Vedic textbook detailing rituals. It means
                          “Kurukshetra is the sacrificial arena of the celestial
                          gods.” Hence, it was regarded as the sacred land that
                          nourished dharma. Dhritarashtra feared that the holy
                          land might influence the minds of his sons. If it
                          aroused the faculty of discrimination, they might turn
                          away from killing their cousins and negotiate a truce.
                          A peaceful settlement meant that the Pandavas would
                          continue being a hindrance for them. He felt great
                          displeasure at these possibilities, instead preferred
                          that this war transpires. He was uncertain of the
                          consequences of the war, yet desired to determine the
                          fate of his sons. Therefore, he asked Sanjay about the
                          activities of the two armies on the battleground.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  );
};

export default VersePage;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  /* background-color: #f7f7fc; */
  .chapter-intro {
    position: relative;
    z-index: 2;
    .chapter-heading {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .chapter-slok {
      p {
        line-height: 2rem;
      }
    }
    .transliteration {
      p {
        font-family: 'Noto Serif', serif;
        font-style: italic;
      }
    }
    .WordMeanings{
      
      .highlight{
           font-style: italic;
           color: #1a0dab;
      }
      span{
        font-weight: 500;
        font-family: 'Noto Serif', serif;
      }
    }
    p{
      margin: 0 0 20px;
    }
  }

  .list-container {
    .verseShort {
      font-family: cursive;
      color: #242d59;
      background-color: #ffc071;
    }
    .translation{
      font-weight: 700;
      p{
        padding: 1rem;
      }
    }
    .heading {
      background-color: rgb(255, 192, 113);
    }
    .commentary {
      .description p {
        line-height: 1.7rem;
        padding: 1rem;
      }
    }
  }
`;
