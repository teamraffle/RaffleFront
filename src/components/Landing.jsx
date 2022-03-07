import React from "react";

const styles = {
  title: {
    color: "#f5f5f5",
    fontFamily: "Poppins",
    minHeight: "840px",
  },
};

export default function Landing() {
  return (
    <div style={styles.title}>
      <div>Landing Page...</div>
      <img src="https://mblogthumb-phinf.pstatic.net/20151212_10/sirasaya_1449911335572G9iqJ_GIF/0AZdESv.gif?type=w2"></img>
      <div> localhost:3000/connectWallet </div>
    </div>
  );
}
