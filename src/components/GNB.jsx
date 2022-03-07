import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import styles from "./GNB.module.css";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <>
      <Menu className={styles.menuBar} defaultSelectedKeys={[pathname]}>
        {/* logo */}
        <Menu.Item key="/">
          <NavLink to="/"></NavLink>
          <div className={styles.logo}>
            <svg
              width="121"
              height="19"
              viewBox="0 0 121 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.748 0.631999C15.044 0.631999 16.8453 1.18267 18.152 2.284C19.4773 3.38533 20.14 4.89733 20.14 6.82V7.1C20.14 8.29467 19.8507 9.312 19.272 10.152C18.712 10.9733 17.8813 11.5987 16.78 12.028C15.6787 12.4573 14.3347 12.672 12.748 12.672H7.904V8.5H12.608C13.2053 8.5 13.6533 8.388 13.952 8.164C14.2507 7.94 14.4 7.59467 14.4 7.128V6.848C14.4 6.4 14.2507 6.064 13.952 5.84C13.6533 5.616 13.2053 5.504 12.608 5.504H7.904V0.631999H12.748ZM0.792 0.631999H6.42V19H0.792V0.631999ZM8.632 11.636H14.568L20.028 18.16V19H13.672L8.632 12.644V11.636ZM43.0626 18.16V19H37.5746L29.3986 0.631999H35.2786L43.0626 18.16ZM28.5586 2.536L31.4986 9.116L30.5186 11.328H32.4786L34.5226 15.976H28.4466L27.1026 19H21.6146V18.16L28.5586 2.536ZM61.3615 12.84H52.0095V7.8H61.3615V12.84ZM61.9215 5.672H52.0095V0.631999H61.9215V5.672ZM44.8975 0.631999H50.5255V19H44.8975V0.631999ZM81.0763 12.84H71.7243V7.8H81.0763V12.84ZM81.6363 5.672H71.7243V0.631999H81.6363V5.672ZM64.6123 0.631999H70.2403V19H64.6123V0.631999ZM91.4392 19V13.96H101.351V19H91.4392ZM89.9552 0.631999V19H84.3272V0.631999H89.9552ZM120.574 19H110.662V14.184H120.574V19ZM120.014 12.168H110.662V7.436H120.014V12.168ZM120.574 5.448H110.662V0.631999H120.574V5.448ZM103.55 0.631999H109.178V19H103.55V0.631999Z"
                fill="#F5F5F5"
              />
            </svg>
          </div>
        </Menu.Item>
        {/* Button Ranking */}
        <Menu.Item className={styles.menuItem} key="/ranking">
          <NavLink to="/ranking">Ranking</NavLink>
        </Menu.Item>
        {/* Button About Us */}
        <Menu.Item className={styles.menuItem} key="/aboutUs">
          <NavLink to="/aboutUs">About Us</NavLink>
        </Menu.Item>
        {/* Search Bar */}
        <Menu.Item key="searchIcon">
          <div className="searchContainer">
            <img
              className={styles.icon}
              src="https://user-images.githubusercontent.com/49471288/156142084-1cd52e4a-db14-4ced-93b8-2d23170f0291.png"
            />
            <input
              className={styles.searchBar}
              type="search"
              id="search"
              placeholder="Search Nickname and Address"
            />
          </div>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default MenuItems;
