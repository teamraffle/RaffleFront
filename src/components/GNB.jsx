import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./GNB.module.css";
import SearchBar from "./SearchBar.jsx";
import ProfileButton from "./ProfileButton.jsx";

function MenuItems() {
  const { pathname } = useLocation();

  // call back functions for Search Bar

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menuBar}
        defaultSelectedKeys={[pathname]}
      >
        {/* logo */}
        <Menu.Item key="/">
          <NavLink to="/"></NavLink>
          <img className={styles.logo} src="img/NFT_Ranks_Logo.svg" alt=" " />
        </Menu.Item>
        {/* Ranking Button */}
        <Menu.Item className={styles.menuItem} key="/ranking">
          <NavLink to="/ranking">Ranking</NavLink>
        </Menu.Item>
        {/* AboutUs Button */}
        <Menu.Item className={styles.menuItem} key="/aboutUs">
          <NavLink to="/aboutUs">About Us</NavLink>
        </Menu.Item>
        {/* Search Bar */}
        <Menu.Item key="search">
          <SearchBar />
        </Menu.Item>
        {/* GNB Right -- Connect Button */}
        <Menu.Item className={styles.headerRight} style={{ paddingRight: "0" }}>
          {sessionStorage.getItem("user") ? (
            <ProfileButton />
          ) : (
            <button className={styles.connectBtn}>
              <NavLink to="/connectWallet"></NavLink>Connect
            </button>
          )}
        </Menu.Item>
      </Menu>
    </>
  );
}

export default MenuItems;
