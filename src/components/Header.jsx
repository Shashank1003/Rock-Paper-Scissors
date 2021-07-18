import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.3rem;
  border: 3px solid hsl(217, 16%, 45%);
  border-radius: 15px;
  margin-top: 3rem;
  width: 700px;

  @media (max-width: 992px){
      width: 90vw;
      padding: 1rem;
      border-radius: 7px;
      margin-top: 2rem;
  }
`;

const Heading = styled.img`
align-self: center;

@media (max-width: 992px) {
    width: 7rem;
    height: 4rem;
}
`;

const ScoreBox = styled.div`
  width: 10rem;
  height: 7rem;
  background: white;
  padding: 1rem;
  text-align: center;
  border-radius: 7px;
  margin-right: 0.5rem;

  @media (max-width: 992px) {
      width: 5rem;
      height: 5rem;
  }
`;

const P = styled.p`
  letter-spacing: 2px;
  color: hsl(229, 64%, 46%);

  @media (max-width: 992px) {
      font-size: 0.7rem;
  }
`;

const Score = styled.p`
  font-size: 3.5rem;
  font-weight: 700;
  color: hsl(229, 25%, 31%);

  @media (max-width: 992px) {
      font-size: 2rem;
  }
`;

function Header(props) {
  return (
    <Container>
      <Heading src={logo} />
      <ScoreBox>
        <P>SCORE</P>
        <Score>{props.score}</Score>
      </ScoreBox>
    </Container>
  );
}

export default Header;
