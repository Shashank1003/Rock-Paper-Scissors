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

  useEffect(() => {
    if (trigger === true) {
      return setCount((preVal) => {
        return preVal + 1;
      });
    }
  }, [trigger]);

  useEffect(() => {
    if (
      (Name === "rock" && (randomInt === 1 || 5)) ||
      (Name === "paper" && (randomInt === 2 || 4)) ||
      (Name === "scissors" && (randomInt === 3 || 5)) ||
      (Name === "lizard" && (randomInt === 3 || 2)) ||
      (Name === "spock" && (randomInt === 4 || 1))
    ) {
      setStatus("lose");
      console.log(Name);
      console.log(randomInt);
    } else if (
      (Name === "rock" && (randomInt === 2 || 4)) ||
      (Name === "paper" && (randomInt === 3 || 5)) ||
      (Name === "scissors" && (randomInt === 1 || 4)) ||
      (Name === "lizard" && (randomInt === 5 || 1)) ||
      (Name === "spock" && (randomInt === 2 || 3))
    ) {
      setStatus("win");
      console.log(Name);
      console.log(randomInt);
    } else if (
      (Name === "rock" && randomInt === 3) ||
      (Name === "paper" && randomInt === 1) ||
      (Name === "scissors" && randomInt === 2) ||
      (Name === "lizard" && randomInt === 4) ||
      (Name === "spock" && randomInt === 5)
    ) {
      setStatus("draw");
      console.log(Name);
      console.log(randomInt);
    }
  }, [randomInt, Name, count]);

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
      {modalTrigger === true ? <RulesModal onClick={rulesModalHandler} /> : ""}
    </Container>
  );
}

export default App;
