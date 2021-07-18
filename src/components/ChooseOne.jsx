import React from "react";
import styled from "styled-components";
import Button from "./Button";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import triangle from "../images/bg-triangle.svg";

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
  background-image: url(${triangle});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 992px) {
    width: 300px;
    height: 18rem;
    background-size: 80%;
    margin-top: 8rem;
  }
`;

function ChooseOne(props) {
  return (
    <ButtonBox>
      <Button
        signName="paper"
        image={paper}
        darkColor="hsl(230, 89%, 62%)"
        lightColor="hsl(230, 89%, 65%)"
        shadowColor="hsl(225, 70%, 40%)"
        onClick={props.onClick}
      />

      <Button
        signName="scissors"
        image={scissors}
        darkColor="hsl(39, 89%, 49%)"
        lightColor="hsl(40, 84%, 53%)"
        shadowColor="hsl(34, 98%, 35%)"
        onClick={props.onClick}
      />

      <Button
        signName="rock"
        image={rock}
        darkColor="hsl(349, 71%, 52%)"
        lightColor="hsl(349, 70%, 56%)"
        shadowColor="hsl(347, 65%, 40%)"
        position="absolute"
        className="red"
        onClick={props.onClick}
      />
    </ButtonBox>
  );
}

export default ChooseOne;
