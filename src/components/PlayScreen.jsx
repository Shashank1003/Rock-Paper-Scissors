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
  /* margin-bottom: 8rem; */

  @media (max-width: 992px) {
    /* justify-content: space-between; */
    margin-top: 8rem;
  }
`;

const BigScreenWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const SmallScreenWrapper = styled.div`
  @media (min-width: 1200px) {
    display: none;
  }
`;

function PlayScreen(props) {
  return (
    <div>
      <ScreenWrapper>
        <UserSelection
          Name={props.Name}
          status={props.status}
          doScale={props.isSmall}
        />
        <BigScreenWrapper>
          <PlayAgain status={props.status} playAgain={props.playAgain} />
        </BigScreenWrapper>

        <ComputerSelection
          random={props.random}
          status={props.status}
          doScale={props.isSmall}
        />
      </ScreenWrapper>

      <SmallScreenWrapper>
        <PlayAgain status={props.status} playAgain={props.playAgain} />
      </SmallScreenWrapper>
    </div>
  );
}

export default PlayScreen;
