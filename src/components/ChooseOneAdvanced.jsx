import React from "react";
import styled from "styled-components";
import Button from "./Button";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import spock from "../images/icon-spock.svg";
import lizard from "../images/icon-lizard.svg";
import pentagon from "../images/bg-pentagon.svg";

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  width: 420px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10rem;
  height: 25rem;
  background-image: url(${pentagon});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 992px) {
    width: 300px;
    height: 18rem;
    background-size: 80%;
    margin-top: 8rem;
  }
`;

function ChooseOneAdvanced() {
  return <ButtonBox></ButtonBox>;
}

export default ChooseOneAdvanced;
