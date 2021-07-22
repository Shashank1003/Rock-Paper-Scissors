import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Advanced = styled.button`
  width: 11rem;
  height: 2.8rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  margin-right: 1rem;
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

  @media (max-width: 992px) {
    transform: scale(0.9);
  }
`;

function AdvancedButton(props) {
  return (
    <Wrapper>
      <Advanced onClick={props.onClick}>
        {props.isAdvanced === true ? "Normal Mode" : "Advanced Mode"}
      </Advanced>
    </Wrapper>
  );
}

export default AdvancedButton;
