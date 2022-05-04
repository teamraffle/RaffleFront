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

const BodyLeft = styled.div`
  width: 50rem;
  height: auto;
`;
const BodyRight = styled.div`
width: 20rem
height: auto;

margin-left: 4rem;
`;

const Box = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 5.8rem;
`;

const Title = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #f5f5f5;

  margin-bottom: 2.4rem;
`;

const BoxContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 48.3rem;
  height: ${(props) => props.height};

  background: rgba(0, 0, 0, 0);
  border-radius: 1.4rem;
  border: solid 2px #626262;
`;

const BoxInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: rgba(0, 0, 0, 0);
  border: solid 0px #626262;

  padding-left: 1.4rem;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #4f4f54;

  &::placeholder {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.48px;
    text-align: left;
    color: #4f4f54;
  }
`;

const BoxText = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #4f4f54;
`;

const UploadButton = styled.div`
  width: 160px;
  height: 36px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 1.4rem;

  padding: 10px 41px;
  border-radius: 19px;
  background-color: #434d22;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: -0.42px;
  text-align: left;
  color: #d6f866;

  cursor: pointer;
`;

const PriceUnit = styled.div`
  position: absolute;
  left: 42.8rem;

  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  text-align: left;
  color: #4f4f54;
`;

const ProgressBar = styled.div`
  width: 16.8rem;
  height: 6px;
  border-radius: 10px;
  background-color: #2f2f2f;

  margin-bottom: 1.2rem;
`;

const ProgressList = styled.div`
  display: flex;
  flex-direction: column;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;
  color: #f5f5f5;
`;

const ProgressJobs = styled.div`
  margin-bottom: 1.4rem;

  opacity: 0.3;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: left;

  color: #626262;
`;

export default function CreateNewProject() {
  return (
    <Container>
      <Header>Create New Project</Header>
      <Body>
        <BodyLeft>
          <Box>
            <Title>Upload file</Title>
            <BoxContent
              style={{ borderStyle: "dotted" }}
              width="483px"
              height="16rem"
            >
              <BoxText
                style={{
                  marginTop: "0.4rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                PNG, GIF, WEBP, MP4 or MP3. MAx size 100MB.
              </BoxText>
              <UploadButton>Choose File</UploadButton>
            </BoxContent>
          </Box>
          <Box>
            <Title>Name</Title>
            <BoxContent width="483px" height="5.2rem">
              <BoxInput placeholder="Project Name" />
            </BoxContent>
          </Box>
          <Box>
            <Title>Description</Title>
            <BoxContent type="text" width="483px" height="9rem">
              <BoxInput placeholder="Provide a detailed description of your project."></BoxInput>
            </BoxContent>
          </Box>
          <Box>
            <Title>Price</Title>
            <BoxContent type="text" width="483px" height="5.2rem">
              <BoxInput placeholder="Enter price for one piece"></BoxInput>
              <PriceUnit>ETH</PriceUnit>
            </BoxContent>
          </Box>
          <Box>
            <Title>Date</Title>
            <BoxContent type="text" width="483px" height="5.2rem">
              <BoxInput placeholder="Enter Date"></BoxInput>
              <img
                style={{
                  width: "2rem",
                  height: "2.2rem",
                  position: "absolute",
                  left: "42.8rem",
                  cursor: "pointer",
                }}
                src="img/calendar.png"
                alt="calendar img"
              />
            </BoxContent>
          </Box>
          <Box>
            <Title style={{ marginBottom: "0.8rem" }}>Total supply</Title>
            <BoxText style={{ color: "#848484", marginBottom: "1rem" }}>
              the number of items that can be minted.
            </BoxText>
            <BoxContent
              type="text"
              placeholder="Enter Date"
              width="483px"
              height="5.2rem"
            >
              <BoxInput placeholder="Enter price for one piece"></BoxInput>
            </BoxContent>
          </Box>
        </BodyLeft>
        <BodyRight>
          <BoxContent
            style={{
              justifyContent: "flex-start",
              paddingTop: "1.4rem",
              paddingLeft: "1.4rem",
              width: "20.5rem",
              height: "32rem",
              marginTop: "4.8rem",
            }}
          >
            <Title style={{ marginBottom: "1rem" }}>Progress</Title>
            <ProgressBar>
              <div
                style={{
                  position: "absolute",
                  width: "1.4rem",
                  height: "0.6rem",
                  borderRadius: "1rem",
                  backgroundColor: "#d6f866",
                }}
              ></div>
            </ProgressBar>
            <ProgressList>
              <ProgressJobs style={{ color: "#d6f866", opacity: "1" }}>
                ⦁ Upload file
              </ProgressJobs>
              <ProgressJobs>⦁ Project name</ProgressJobs>
              <ProgressJobs>⦁ Description</ProgressJobs>
              <ProgressJobs>⦁ Price</ProgressJobs>
              <ProgressJobs>⦁ Date</ProgressJobs>
              <ProgressJobs>⦁ Total supply</ProgressJobs>
              <ProgressJobs style={{ marginBottom: "0rem" }}>
                ⦁ Preconditoin
              </ProgressJobs>
            </ProgressList>
          </BoxContent>
        </BodyRight>
      </Body>
    </Container>
  );
}
