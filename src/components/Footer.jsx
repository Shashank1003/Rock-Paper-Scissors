import React from "react";
import styled from "styled-components";
import Credits from "../components/Credits";
import RulesButton from "./RulesButton";
import AdvancedButton from "./AdvancedButton";

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
  margin-top: 10rem;
  position: relative;
  z-index: 4;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const BigScreenDiv = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

const SmallScreenDiv = styled.div`
  margin-top: 1rem;
  @media (min-width: 992px) {
    display: none;
  }
`;

function Footer(props) {
  return (
    <FooterWrapper>
      <BigScreenDiv>
        <Credits />
      </BigScreenDiv>

      <ButtonBox>
        <AdvancedButton />
        <RulesButton onClick={props.onClick} />
      </ButtonBox>

      <SmallScreenDiv>
        <Credits />
      </SmallScreenDiv>
    </FooterWrapper>
  );
}

export default Footer;
