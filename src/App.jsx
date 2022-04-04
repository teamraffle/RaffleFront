import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";
// import styles from "./style.css";
import "./style.css";
// import Ranking from "components/Ranking";
import GNB from "./components/GNB";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import ConnectWallet from "./components/ConnectWallet";
import Portfoilo from "./components/Portfoilo";
import styled from "styled-components";

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const Wrapper = styled.div`
    min-width: 102.4rem;
    min-height: 100vh;

    position: relative;

    background: #151517;
    align-items: center;
  `;

  const Header = styled.div`
    /* flex container properties */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    position: relative;
    top: 0;
    z-index: 100;

    max-width: 102.4rem;
    height: 7.2rem;
    background: #151517;
    margin: 0 auto;

    font-family: Poppins;
    border-bottom: 5px solid rgba(47, 47, 47, 1);
  `;

  const Content = styled.div`
    /* flex container properties */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* position relative for absolute child components */
    position: relative;
    z-index: 1;

    font-family: Poppins, sans-serif;
    color: #f5f5f5;
    background-color: #151517;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;

    min-height: 90vh;
    max-width: 102.4rem;
  `;

  const Footer = styled.div`
    /* flex items properties */
    z-index: 2;

    background-color: rgba(255, 255, 255, 0);

    max-width: 102.4rem;
    height: 6rem;

    font-family: Poppins;
    font-size: 1.6rem;
    text-align: center;
    line-height: auto;

    margin-left: auto;
    margin-right: auto;

    padding-left: 4.4rem;
    padding-bottom: 2.4rem;

    /* text */
    font-family: Poppins;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.48px;
    text-align: left;
    color: #bdbebe;
  `;

  return (
    <Wrapper>
      <Router>
        {/* Header */}
        <Header>
          <GNB />
        </Header>

        {/* Contents */}
        <Content>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/Ranking">
              {/* <Ranking isServerInfo={isServerInfo} /> */}
            </Route>
            <Route path="/connectWallet">
              <ConnectWallet />
            </Route>
            <Route path="/Portfolio">
              <Portfoilo />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
          </Switch>
        </Content>
        {/* Footer */}
        <Footer>ⓒ 2022 RAFFLE | All rights reserved</Footer>
        {/* Footer is in Content*/}
      </Router>
    </Wrapper>
  );
};
export default App;
