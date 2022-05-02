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
  position: relative;
  width: 102.4rem;
  margin-right: 6rem;
`;

const LayoutImg = styled.img`
  width: auto;
  animation: ${fadein} 3s ease-in-out;
`;

const RegButtonLink = styled(Link)`
  position: absolute;
  width: 10rem;
  height: 5rem;

  left: 76rem;
  top: 86rem;
  cursor: pointer;

  // background: rgba(123, 22, 80, 0.4);

  animation: ${fadein} 3s ease-in-out;
`;

export default function Projects() {
  return (
    <Container>
      <LayoutImg src="img/Project_Main_Fake.png" alt="project img" />
      <RegButtonLink to="projectsreg" />
    </Container>
  );
}
