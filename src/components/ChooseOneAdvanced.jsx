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
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 992px) {
    width: 300px;
    height: 18rem;
    background-size: 80%;
    margin-top: 8rem;
  }
`;

function ChooseOneAdvanced(props) {
  return (
    <ButtonBox>
      <Button
        signName="paper"
        image={paper}
        darkColor="hsl(230, 89%, 62%)"
        lightColor="hsl(230, 89%, 65%)"
        shadowColor="hsl(225, 70%, 40%)"
        onClick={props.onClick}
        className="blue"
      />

      <Button
        signName="scissors"
        image={scissors}
        darkColor="hsl(39, 89%, 49%)"
        lightColor="hsl(40, 84%, 53%)"
        shadowColor="hsl(34, 98%, 35%)"
        onClick={props.onClick}
        className="yellow"
      />

      <Button
        signName="rock"
        image={rock}
        darkColor="hsl(349, 71%, 52%)"
        lightColor="hsl(349, 70%, 56%)"
        shadowColor="hsl(347, 65%, 40%)"
        className="redAdvanced"
        onClick={props.onClick}
      />

      <Button
        signName="lizard"
        image={lizard}
        darkColor="hsl(261, 73%, 60%)"
        lightColor="hsl(261, 72%, 63%)"
        shadowColor="hsl(265, 65%, 40%)"
        onClick={props.onClick}
        className="purple"
      />

      <Button
        signName="spock"
        image={spock}
        darkColor="hsl(189, 59%, 53%)"
        lightColor="hsl(189, 58%, 57%)"
        shadowColor="hsl(189, 65%, 40%)"
        onClick={props.onClick}
        className="cyan"
      />
    </ButtonBox>
  );
}

export default ChooseOneAdvanced;
