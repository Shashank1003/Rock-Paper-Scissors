import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ChooseOne from "./ChooseOne";
import PlayScreen from "./PlayScreen";
import RulesButton from "./RulesButton";
import RulesModal from "./RulesModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [score, setScore] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [Name, setName] = useState("");
  const [randomInt, setRandomInt] = useState(5);
  const [status, setStatus] = useState("");
  const [count, setCount] = useState(0);
  const [modalTrigger, setModalTrigger] = useState(false);

  const initialScreenSize = () => {
    if (window.innerWidth > 992) {
      return false;
    } else {
      return true;
    }
  };

  const [isSmall, setIsSmall] = useState(initialScreenSize);

  const resizeHandler = () => {
    if (window.innerWidth > 992) {
      return setIsSmall(false);
    } else {
      return setIsSmall(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  const clicked = (signName) => {
    setName(signName);
    setTrigger(true);
    return setRandomInt(Math.floor(Math.random() * 3));
  };

  const playAgainHandler = () => {
    setTrigger(false);
  };

  const rulesModalHandler = () => {
    setModalTrigger(!modalTrigger);
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
      ((Name === "rock") & (randomInt === 0)) |
      ((Name === "paper") & (randomInt === 1)) |
      ((Name === "scissors") & (randomInt === 2))
    ) {
      setStatus("lose");
    } else if (
      ((Name === "rock") & (randomInt === 1)) |
      ((Name === "paper") & (randomInt === 2)) |
      ((Name === "scissors") & (randomInt === 0))
    ) {
      setStatus("win");
    } else if (
      ((Name === "rock") & (randomInt === 2)) |
      ((Name === "paper") & (randomInt === 0)) |
      ((Name === "scissors") & (randomInt === 1))
    ) {
      setStatus("draw");
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
        <ChooseOne onClick={clicked} isSmall={isSmall} />
      ) : (
        <PlayScreen
          Name={Name}
          status={status}
          random={randomInt}
          playAgain={playAgainHandler}
          isSmall={isSmall}
        />
      )}

      <RulesButton onClick={rulesModalHandler} />
      {modalTrigger === true ? <RulesModal onClick={rulesModalHandler} /> : ""}
    </Container>
  );
}

export default App;
