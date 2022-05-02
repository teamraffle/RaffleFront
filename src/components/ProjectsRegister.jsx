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
`;

const LayoutImg = styled.img`
  animation: ${fadein} 3s ease-in-out;
  margin-top: 4rem;
  margin-bottom: 28rem;
`;

export default function ProjectsRegister() {
  return (
    <Container>
      <LayoutImg src="img/Project_Register_Fake.png" alt="project img" />
    </Container>
  );
}
