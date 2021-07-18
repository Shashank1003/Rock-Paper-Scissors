import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  animation: moveT 2s 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  visibility: hidden;

  @keyframes moveT {
    from {
      opacity: 0;
      /* margin-top: 20rem; */
      visibility: hidden;
    }

    to {
      opacity: 1;
      /* margin-top: 0; */
      visibility: visible;
    }
  }

  @media (max-width: 1200px) {
    position: absolute;
    bottom: 5rem;
    margin-right: 2rem;
  }

  @media (max-width: 992px) {
    bottom: 11rem;
    margin-right: 0rem;
  }
`;

const Status = styled.p`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 2px;

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
`;

const PlayAgainButton = styled.button`
  width: 14rem;
  height: 3rem;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: hsl(229, 25%, 31%);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-top: 1rem;
  transition: all 220ms ease-in-out;
  position: relative;
  z-index: 5;

  &:hover {
    color: hsl(349, 71%, 52%);
  }
`;

function PlayAgain(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (props.status === "win") {
      return setText("YOU WIN");
    } else if (props.status === "lose") {
      return setText("YOU LOSE");
    } else if (props.status === "draw") {
      return setText("DRAW");
    }
  }, [props.status]);
  return (
    <Wrapper>
      <Status>{text}</Status>
      <PlayAgainButton onClick={props.playAgain}>PLAY AGAIN</PlayAgainButton>
    </Wrapper>
  );
}

export default PlayAgain;
