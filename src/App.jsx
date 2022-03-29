import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd"; // ant design library
import "antd/dist/antd.css";
// import styles from "./style.css";
import "./style.css";
// import Ranking from "components/Ranking";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import GNB from "./components/GNB";
import Landing from "./components/Landing/Landing";
import AboutUs from "./components/AboutUs";
import ConnectWallet from "./components/ConnectWallet";
import AppjsxStyle from "./App.module.css";
import styled from "styled-components";
const { Footer } = Layout;

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div>
      <Layout>
        <Router>
          {/* Header */}
          <div className={AppjsxStyle.header}>
            <GNB />
          </div>

          {/* Contents */}
          <div className={AppjsxStyle.content}>
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
              <Route path="/AboutUs">{/* <AboutUs /> */}</Route>
              <Route path="/wallet">
                <Wallet />
              </Route>
              <Route path="/1inch">
                <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                  <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                    <DEX chain="eth" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                    <DEX chain="bsc" />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                    <DEX chain="polygon" />
                  </Tabs.TabPane>
                </Tabs>
              </Route>
              <Route path="/erc20balance">
                <ERC20Balance />
              </Route>
              <Route path="/onramp">
                <Ramper />
              </Route>
              <Route path="/erc20transfers">
                <ERC20Transfers />
              </Route>
              <Route path="/nftBalance">
                <NFTBalance />
              </Route>
              <Route path="/contract">
                <Contract />
              </Route>
              <Route path="/">
                <Redirect to="/" />
              </Route>
              <Route path="/nonauthenticated">
                <>Please login using the "Authenticate" button</>
              </Route>
            </Switch>
            <div className={AppjsxStyle.footer}>
              ⓒ 2022 RAFFLE | All rights reserved
            </div>
          </div>
          {/* Footer is in Content*/}
        </Router>
      </Layout>
    </div>
  );
};
export default App;
