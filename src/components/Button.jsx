import React from "react";
import styled from "styled-components";

const Disk = styled.button`
  width: 9rem;
  height: 9rem;
  border: 0px solid;
  border-color: transparent;
  border-radius: 50%;
  position: relative;
  background-clip: padding-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset -5px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  @media (max-width: 992px) {
    width: 6.5rem;
    height: 6.5rem;
  }

  /* z-index: -2; */

  &:hover .image {
    animation: shake 1.2s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: -1.3rem;
    bottom: -1.3rem;
    right: -1.3rem;
    left: -1.3rem;
    background: linear-gradient(
      to top,
      ${(props) => props.darkColor},
      ${(props) => props.lightColor}
    );
    border: none;
    border-radius: 50%;
    z-index: -1;
    box-shadow: -5px 5px ${(props) => props.shadowColor};

    @media (max-width: 992px) {
      top: -1rem;
      bottom: -1rem;
      right: -1rem;
      left: -1rem;
    }
  }

  &:active {
    box-shadow: inset -10px 10px rgba(0, 0, 0, 0.2);
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    33% {
      transform: rotate(15deg);
    }

    66% {
      transform: rotate(-15deg);
    }

    100% {
      transform: rotate(15deg);
    }
  }
`;

const Container = styled.div`
  /* position: ${(props) => props.position || "relative"}; */
  /* left: ${(props) => props.left}; */
  /* bottom: ${(props) => props.bottom}; */
  position: relative;
  z-index: 2;
  /* transform: translateX(${(props) => props.X}); */
  transform: scale(${(props) => props.scale});

  @media (max-width: 992px) {
    /* transform: scale(${(props) => props.scaleS}); */
    transform: scale(1);
  }

  &.red {
    position: absolute;
    left: 50%;
    bottom: 1.5rem;
    transform: translateX(-50%);
  }
`;

const Image = styled.img`
  height: 4.5rem;
  width: 4rem;

  @media (max-width: 992px) {
    height: 3.5rem;
    width: 3rem;
  }
`;

function Button(props) {
  return (
    <Container
      position={props.position}
      left={props.left}
      bottom={props.bottom}
      scale={props.scale}
      X={props.X}
      className={props.className}
    >
      <Disk
        darkColor={props.darkColor}
        lightColor={props.lightColor}
        shadowColor={props.shadowColor}
        onClick={() => {
          props.onClick(props.signName);
        }}
      >
        <Image src={props.image} alt={props.signName} className="image" />
      </Disk>
    </Container>
  );
}

export default Button;
