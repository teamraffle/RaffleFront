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
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import ConnectWallet from "./components/ConnectWallet";
const { Footer } = Layout;
// import st from "./style.css";

const styles = {
  header: {
    position: "fixed",
    zIndex: 100,
    width: "100%",
    height: "72px",
    background: "#151517",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "5px solid rgba(47, 47, 47, 1)",
    padding: "0px",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
  content: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    color: "#f5f5f5",
    backgroundColor: "#151517",
    marginTop: "72px",
    height: "auto",
  },
  footer: {
    position: "absolute",
    bottom: "0",
    fontSize: "16px",
    fontFamily: "Poppins",
    marginBottom: "24px",
    marginLeft: "268px",
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
};

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
          <div style={styles.header}>
            <GNB />
          </div>

          {/* Contents */}
          <div style={styles.content}>
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
              <Route path="/AboutUs">
                <AboutUs />
              </Route>
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
          </div>
          {/* Footer */}
          <Footer style={styles.footer}>
            <Text style={{ color: "#bdbebe" }}>
              ⓒ 2022 RAFFLE | All rights reserved
            </Text>
          </Footer>
        </Router>
      </Layout>
    </div>
  );
};
export default App;
