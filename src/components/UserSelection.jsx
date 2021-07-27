import React from "react";
import styled from "styled-components";
import Button from "./Button";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
  animation: moveF 1s 0s;
  animation-fill-mode: forwards;
  position: relative;

  @keyframes moveF {
    from {
      margin-left: 18rem;
    }
    to {
      margin-left: 10rem;
    }
  }

  @media (max-width: 992px) {
    margin-right: 2rem;
  }
`;

const Text = styled.p`
  margin-bottom: 9rem;
  color: white;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const PseudoDiv = styled.div`
  position: absolute;
  width: 13.5rem;
  height: 13.5rem;
  border-radius: 50%;
  background-color: transparent;
  z-index: 3;
  top: 8.4rem;
  right: -0.8rem;
`;

const ButtonWrapper = styled.div`
  position: relative;

  .ripple-background {
    position: absolute;
    /* position: relative; */
    /* z-index: 5; */

    .circle {
      position: absolute;
      border-radius: 50%;
      background: white;
      /* animation: ripple 10s;
      animation-iteration-count: infinite; */
      /* animation-fill-mode: forwards; */
    }

    .med {
      width: 400px;
      height: 400px;
      left: -8rem;
      top: -8rem;
      background-color: hsl(229, 25%, 31%);
      opacity: 0;
      animation: medRip;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-delay: 1.5s;
      overflow: hidden;

      @keyframes medRip {
        0% {
          opacity: 0;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.1);
        }
        100% {
          opacity: 0;
          transform: scale(1.2);
        }
      }

      @media (max-width: 992px) {
        width: 180px;
        height: 180px;
        left: -2.4rem;
        top: -2.4rem;
      }
    }

    .lrg {
      width: 500px;
      height: 500px;
      left: -11.3rem;
      top: -11.3rem;
      background-color: hsl(229, 25%, 31%);
      opacity: 0;
      animation: lrgRip;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-delay: 1.5s;
      overflow: hidden;

      @keyframes lrgRip {
        0% {
          opacity: 0;
          transform: scale(1);
        }
        50% {
          opacity: 0.5;
          transform: scale(1.1);
        }
        100% {
          opacity: 0;
          transform: scale(1.2);
        }
      }

      @media (max-width: 992px) {
        width: 230px;
        height: 230px;
        left: -4rem;
        top: -4rem;
      }
    }

    .xlrg {
      width: 600px;
      height: 600px;
      left: -14.5rem;
      top: -14.5rem;
      background-color: hsl(229, 25%, 31%);
      opacity: 0;
      animation: xlrgRip;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-delay: 1.5s;
      overflow: hidden;

      @keyframes xlrgRip {
        0% {
          opacity: 0;
          transform: scale(1);
        }
        50% {
          opacity: 0.2;
          transform: scale(1.1);
        }
        100% {
          opacity: 0;
          transform: scale(1.2);
        }
      }

      @media (max-width: 992px) {
        width: 300px;
        height: 300px;
        left: -6.2rem;
        top: -6.2rem;
      }
    }
  }
`;

const SmallScreenText = styled.p`
  margin-top: 3rem;
  color: white;
  font-size: 1rem;
  letter-spacing: 2px;

  @media (min-width: 993px) {
    display: none;
  }
`;

function UserSelection(props) {
  const disableClick = () => {
    console.log("IGNORE THIS");
  };

  return (
    <Wrapper>
      <Text>YOU PICKED</Text>

      <PseudoDiv />

      <ButtonWrapper>
        {props.status === "win" ? (
          <div className="ripple-background">
            <div className="circle xlrg"></div>
            <div className="circle lrg"></div>
            <div className="circle med"></div>
          </div>
        ) : (
          ""
        )}

        {props.Name === "rock" ? (
          <Button
            signName="rock"
            image={rock}
            darkColor="hsl(349, 71%, 52%)"
            lightColor="hsl(349, 70%, 56%)"
            shadowColor="hsl(347, 65%, 40%)"
            onClick={disableClick}
            scale="1.5"
          />
        ) : props.Name === "paper" ? (
          <Button
            signName="paper"
            image={paper}
            darkColor="hsl(230, 89%, 62%)"
            lightColor="hsl(230, 89%, 65%)"
            shadowColor="hsl(225, 70%, 40%)"
            onClick={disableClick}
            scale="1.5"
          />
        ) : props.Name === "scissors" ? (
          <Button
            signName="scissors"
            image={scissors}
            darkColor="hsl(39, 89%, 49%)"
            lightColor="hsl(40, 84%, 53%)"
            shadowColor="hsl(34, 98%, 35%)"
            onClick={disableClick}
            scale="1.5"
          />
        ) : props.Name === "lizard" ? (
          <Button
            signName="lizard"
            image={lizard}
            darkColor="hsl(261, 73%, 60%)"
            lightColor="hsl(261, 72%, 63%)"
            shadowColor="hsl(265, 65%, 40%)"
            onClick={disableClick}
            scale="1.5"
          />
        ) : props.Name === "spock" ? (
          <Button
            signName="spock"
            image={spock}
            darkColor="hsl(189, 59%, 53%)"
            lightColor="hsl(189, 58%, 57%)"
            shadowColor="hsl(189, 65%, 40%)"
            onClick={disableClick}
            scale="1.5"
          />
        ) : (
          ""
        )}
      </ButtonWrapper>
      <SmallScreenText>YOU PICKED</SmallScreenText>
    </Wrapper>
  );
}

export default UserSelection;
