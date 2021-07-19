import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  p {
    color: white;
    font-size: 1rem;

    @media (max-width: 992px) {
      margin-bottom: 0.5rem;
    }

    a {
      text-decoration: none;
      color: hsl(349, 70%, 56%);
      font-size: 1.1rem;
      transition: all 220ms ease-in-out;

      &:hover {
        color: hsl(40, 84%, 53%);
      }
    }
  }
`;

function Credits() {
  return (
    <Wrapper>
      <p>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
      </p>

      <p>
        Solution by <a href="https://github.com/Shashank1003">Shashank</a>
      </p>
    </Wrapper>
  );
}

export default Credits;
