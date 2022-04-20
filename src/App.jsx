import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";

import "./style.css";
// import Ranking from "components/Ranking";
import GNB from "./components/GNB";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import Portfoilo from "./components/Portfoilo";
import PageNotFound from "./components/PageNotFound";
import styled from "styled-components";

const App = () => {
  const Wrapper = styled.div`
    /* flex container properties */
    display: flex;
    flex-direction: column;
    align-items: center;

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

    width: 100%;
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
    width: 100%;
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
    max-width: 100%;
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
            <Route path="/portfolio">
              <Portfoilo />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Content>
        {/* Footer */}
        {/* Footer is in Content*/}
      </Router>
      <Footer>ⓒ 2022 RAFFLE | All rights reserved</Footer>
    </Wrapper>
  );
};
export default App;
