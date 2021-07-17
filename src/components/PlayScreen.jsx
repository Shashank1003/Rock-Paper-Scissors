import React from "react";
import styled from "styled-components";
import UserSelection from "./UserSelection";
import ComputerSelection from "./ComputerSelection";
import PlayAgain from "./PlayAgain";

const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5rem;
  align-items: center;

  @media (max-width: 992px) {
    /* justify-content: space-between; */
    margin-top: 8rem;
  }
`;

function PlayScreen(props) {
  return (
    <ScreenWrapper>
      <UserSelection
        Name={props.Name}
        status={props.status}
        doScale={props.isSmall}
      />
      <PlayAgain status={props.status} playAgain={props.playAgain} />
      <ComputerSelection
        random={props.random}
        status={props.status}
        doScale={props.isSmall}
      />
    </ScreenWrapper>
  );
}

export default PlayScreen;
