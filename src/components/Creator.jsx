import { Link } from "react-router-dom";
import React from "react";
import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  0% {
    opacity: 0;
    transform: none;
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 102.4rem;

  margin-left: 14.8rem;
`;

const Header = styled.div`
  font-family: Poppins;
  font-size: 28px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.84px;
  text-align: left;
  color: #f5f5f5;

  margin-top: 2.8rem;
  margin-bottom: 2.8rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 36rem;
  height: 38rem;

  border-radius: 0.8rem;
  background-color: #2f2f2f;
`;

const ProjectBoxText = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: center;
  color: #626262;
`;

const CreateButton = styled.div`
  cursor: pointer;
`;

export default function Projects() {
  return (
    <Container>
      <Header>Creator</Header>
      <Body>
        <NewProjectBox>
          <CreateButton>
            <img src="img/create_button.svg" alt="create button img" />
          </CreateButton>
          <ProjectBoxText>Launch New Project</ProjectBoxText>
        </NewProjectBox>
      </Body>
    </Container>
  );
}
