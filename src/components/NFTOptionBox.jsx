import styled from "styled-components";
import { useState } from "react";

const OptionBoxContainer = styled.div`
  height: 24rem;
  border-radius: 0.6rem;
`;

const OptionBox = styled.div`
  position: relative;
  width: 12rem;
  height: 4rem;

  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;

  border-radius: 0.6rem;
  border: solid 0.1rem #626262;

  cursor: pointer;
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
      <OptionBox>asfd</OptionBox>
      <OptionBox>asfd</OptionBox>
      <OptionBox>asfd</OptionBox>
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
  const [option, setOption] = useState(1);
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <OptionBox
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {(option === 1 && "Latest") ||
          (option === 2 && "Oldest") ||
          (option === 3 && "Price: High to Low") ||
          (option === 4 && "Price: Low to High") ||
          (option === 5 && "Holding: Long Term") ||
          (option === 6 && "Holding: Short Term")}
        <OptionBoxIcon
          src={
            (toggle && "img/option_box_active.png") ||
            (!toggle && "img/option_box_inactive.png")
          }
          alt="option box icon"
        />
      </OptionBox>
      {toggle ? <Options /> : null}
    </div>
  );
}
