import React from "react";
import styled from "styled-components";
import rulesImg from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";

const BlackBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBG = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;

  p {
    font-size: 2rem;
    color: hsl(229, 25%, 31%);
    font-weight: 700;
  }

  img {
    width: 1.2rem;
    height: 1.2rem;
    align-self: center;
    cursor: pointer;
  }
`;

function RulesModal(props) {
  return (
    <BlackBG>
      <WhiteBG>
        <TopRow>
          <p>RULES</p>
          <img src={closeIcon} alt="close" onClick={props.onClick}/>
        </TopRow>
        <img src={rulesImg} alt="rules" />
      </WhiteBG>
    </BlackBG>
  );
}

export default RulesModal;
