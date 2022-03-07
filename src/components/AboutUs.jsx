import React from "react";

const styles = {
  aboutUs: {
    color: "#f5f5f5",
    fontFamily: "Poppins",
    minHeight: "840px",
  },
};

export default function AboutUs() {
  return (
    <div style={styles.aboutUs}>
      <p>We are the BEST!!! HELL YEAH!!!!</p>
      <img src="https://mblogthumb-phinf.pstatic.net/20151212_10/sirasaya_1449911335572G9iqJ_GIF/0AZdESv.gif?type=w2"></img>
      <br />
      <p>
        <div>Team Member</div>
        <ol>멤버1</ol>
        <ol>멤버2</ol>
        <ol>멤버3</ol>
        <ol>멤버4</ol>
        <ol>멤버5</ol>
      </p>
      <br />
    </div>
  );
}
