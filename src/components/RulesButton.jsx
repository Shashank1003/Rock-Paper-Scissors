import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 2rem;

  @media (max-width: 992px) {
    left: 50%;
    transform: translateX(-50%);

  }
`;

const Rules = styled.button`
  width: 9rem;
  height: 2.8rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: white;
    color: hsl(229, 25%, 31%);
  }
`;

function RulesButton(props) {
  return (
    <Wrapper>
      <Rules onClick={props.onClick}>RULES</Rules>
    </Wrapper>
  );
}

export default RulesButton;
