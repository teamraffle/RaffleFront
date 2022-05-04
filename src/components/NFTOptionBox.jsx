import styled from "styled-components";
import { useState } from "react";

const OptionBox = styled.div`
  position: relative;
  width: 15rem;
  height: 4rem;

  padding-top: 1.2rem;
  padding-bottom: 1rem;
  padding-left: 2rem;

  border: solid 0.1rem #626262;

  cursor: pointer;

  background: #2f2f2f;

  &:hover {
    background: #626262;
  }
`;

const OptionDisplay = styled.div`
  position: relative;
  width: 15rem;
  height: 4rem;

  padding-top: 1.2rem;
  padding-bottom: 1rem;
  padding-left: 2rem;

  border: solid 0.1rem #626262;

  cursor: pointer;

  background: #2f2f2f;
`;

const OptionBoxIcon = styled.img`
  position: absolute;

  width: 2rem;
  height: 2rem;
  left: 80px;
  top: 12px;
`;

const Options = () => {
  return (
    <div>
      <OptionBox style={{ borderRadius: "0.6rem 0.6rem 0rem 0rem" }}>
        Latest
      </OptionBox>
      <OptionBox>Oldest</OptionBox>
      <OptionBox>Price: High to Low</OptionBox>
      <OptionBox>Price: Low to High</OptionBox>
      <OptionBox>Holding: Long Term</OptionBox>
      <OptionBox style={{ borderRadius: "0rem 0rem 0.6rem 0.6rem " }}>
        Holding: Short Term
      </OptionBox>
    </div>
  );
};

export default function NFTOptionBox() {
  // option
  // 1 : Latest
  // 2 : Oldest
  // 3 : Price: High to Low
  // 4 : Price: Low to High
  // 5 : Holding: Long Term
  // 6 : Holding: Short Term
  //   const [option, setOption] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <OptionDisplay
        style={{ width: "12rem", marginLeft: "3rem", borderRadius: "0.6rem" }}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Latest
        {/* {(option === 1 && "Latest") ||
          (option === 2 && "Oldest") ||
          (option === 3 && "Price: High to Low") ||
          (option === 4 && "Price: Low to High") ||
          (option === 5 && "Holding: Long Term") ||
          (option === 6 && "Holding: Short Term")} */}
        <OptionBoxIcon
          src={
            (toggle && "img/option_box_active.png") ||
            (!toggle && "img/option_box_inactive.png")
          }
          alt="option box icon"
        />
      </OptionDisplay>
      {toggle ? <Options /> : null}
    </div>
  );
}
