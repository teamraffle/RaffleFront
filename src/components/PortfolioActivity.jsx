import { Menu } from "antd";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ProfileButton from "./ProfileButton.jsx";
import styled, { css } from "styled-components";

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

export default function PortfoiloActivity() {
  return <SearchBar />;
}
