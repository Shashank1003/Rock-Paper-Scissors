import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChooseOne from "./ChooseOne";
import PlayScreen from "./PlayScreen";
import RulesModal from "./RulesModal";
import Footer from "./Footer";
import ChooseOneAdvanced from "../components/ChooseOneAdvanced";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`;

function App() {
  const [score, setScore] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [Name, setName] = useState("");
  const [randomInt, setRandomInt] = useState(10);
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);
  const [modalTrigger, setModalTrigger] = useState(false);
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [mode, setMode] = useState("normal");

  const clicked = (signName) => {
    setName(signName);
    setTrigger(true);
    if (isAdvanced === false) {
      return setRandomInt(Math.floor(Math.random() * 3) + 1);
    } else if (isAdvanced === true) {
      return setRandomInt(Math.floor(Math.random() * 5) + 1);
    }
  };

  const playAgainHandler = () => {
    setTrigger(false);
  };

  const rulesModalHandler = () => {
    setModalTrigger(!modalTrigger);
  };

  const advancedModeTrigger = () => {
    setIsAdvanced(!isAdvanced);
  };

  const chooseOneGenerator = (condition) => {
    if (condition === true) {
      return <ChooseOneAdvanced onClick={clicked} />;
    } else {
      return <ChooseOne onClick={clicked} />;
    }
  };

  const getLogic = () => {
    switch (Name) {
      case "paper":
        if (randomInt === 3 || randomInt === 5) {
          setStatus("win");
        } else if (randomInt === 2 || randomInt === 4) {
          setStatus("lose");
        } else {
          setStatus("draw");
        }
        break;

      case "scissors":
        if (randomInt === 1 || randomInt === 4) {
          setStatus("win");
        } else if (randomInt === 3 || randomInt === 5) {
          setStatus("lose");
        } else {
          setStatus("draw");
        }
        break;

      case "rock":
        if (randomInt === 4 || randomInt === 2) {
          setStatus("win");
        } else if (randomInt === 5 || randomInt === 1) {
          setStatus("lose");
        } else {
          setStatus("draw");
        }
        break;

      case "lizard":
        if (randomInt === 1 || randomInt === 5) {
          setStatus("win");
        } else if (randomInt === 2 || randomInt === 3) {
          setStatus("lose");
        } else {
          setStatus("draw");
        }
        break;

      case "spock":
        if (randomInt === 2 || randomInt === 3) {
          setStatus("win");
        } else if (randomInt === 1 || randomInt === 4) {
          setStatus("lose");
        } else {
          setStatus("draw");
        }
        break;

      default:
        console.log("Not decided yet");
        break;
    }
  };

  useEffect(() => {
    if (trigger === true) {
      return setCount((preVal) => {
        return preVal + 1;
      });
    }
  }, [trigger]);

  useEffect(getLogic, [randomInt, Name, count]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (status === "win") {
        setScore((preVal) => {
          return preVal + 1;
        });
      } else if (status === "lose") {
        setScore((preVal) => {
          return preVal - 1;
        });
      } else if (status === "draw") {
        setScore((preVal) => {
          return preVal;
        });
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [status, count]);

  useEffect(() => {
    if (isAdvanced === true) {
      return setMode("advanced");
    } else {
      return setMode("normal");
    }
  }, [isAdvanced]);

  return (
    <Container>
      <Header score={score} />

      {trigger === false ? (
        chooseOneGenerator(isAdvanced)
      ) : (
        <PlayScreen
          Name={Name}
          status={status}
          random={randomInt}
          playAgain={playAgainHandler}
        />
      )}

      {/* {isAdvanced === true ? <ChooseOneAdvanced /> : <ChooseOne />} */}

      {/* <RulesButton onClick={rulesModalHandler} /> */}

      <Footer
        onClickRules={rulesModalHandler}
        onClickAdvanced={advancedModeTrigger}
        isAdvanced={isAdvanced}
      />
      {modalTrigger === true ? (
        <RulesModal onClick={rulesModalHandler} mode={mode} />
      ) : (
        ""
      )}
    </Container>
  );
}

export default App;
