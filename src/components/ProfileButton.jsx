import styles from "./ProfileButton.module.css";
import { useState } from "react";

const ProfileMiniBox = () => {
  return (
    <div className={styles.profileMiniBox}>
      {/* nick name */}
      <div> nikcname </div>
      {/* wallet address */}
      <div> wallet address</div>
      {/* grey split line */}
      <div> ---------- </div>
      {/* Button Portfolio */}
      <div>button</div>
      {/* Button Switch Wallet */}
      <div>switch wallet</div>
      {/* Dark Toggle switch */}
      <div>dark mode</div>
      {/* Sign out */}
      <div>Sign Out</div>
    </div>
  );
};
const ProfileButton = () => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div>
      <div
        className={styles.profileButton}
        onMouseOver={() => {
          setMouseEnter(true);
        }}
        onMouseLeave={() => {
          setMouseEnter(false);
        }}
      >
        a
      </div>
      {mouseEnter ? <ProfileMiniBox /> : null}
    </div>
  );
};

export default ProfileButton;
