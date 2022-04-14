import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

/* ---- export this to theme.js ---- */
const colors = {
  RaffleNeon: "#d6f866",
  RaffleWhite: "#f5f5f5",
  RaffleGrey: "#bdbebe",
  RaffleCharcoal: "#4f4f54",
  RaffleBlack: "#151517",
  RaffleRed: "#ff6c62",
  RaffleGreen: "#72c680",
  RaffleHoverNeon: "#434d22",
  RaffleGreenLight: "#358242",
  RaffleDeepDark: "#2f2f2f",
  RaffleBtnStrokeGrey: "#626262",
};

/* ---- styled components ---- */
const PageNotFoundContainer = styled.div`
  width: 100%;
  height: auto;
`;

const PageNotFoundImg = styled.img`
  width: 60rem;
  height: 52rem;

  margin-left: auto;
  margin-right: auto;
`;

const GoToLandingButton = styled.button`
  position: absolute;

  width: 19rem;
  height: 4rem;
  background-color: #d6f866;
  border: solid 1px #e8faad;
  border-radius: 0.8rem;

  /* text */
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: center;
  color: ${colors.RaffleBlack};

  top: 46rem;
  left: 42rem;
`;

export default function Portfoilo() {
  return (
    <PageNotFoundContainer>
      <PageNotFoundImg
        src="img/page_not_found.png"
        alt="page not found image"
      ></PageNotFoundImg>
      <GoToLandingButton>
        <Link to="/" style={{ cursor: "pointer", color: "#151517" }}>
          GO TO LANDING
        </Link>
      </GoToLandingButton>
    </PageNotFoundContainer>
  );
}
