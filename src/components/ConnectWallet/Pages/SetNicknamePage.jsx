import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const SetNicknamePageContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: Poppins;
  font-size: 2.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;

  margin-top: 8.4rem;
`;

const SetNicknameBox = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 36.2rem;
  height: 35.3rem;
  margin-top: 2.8rem;
  border-radius: 1.4rem;
  background-color: #d6f866;
`;

const BoxHeader = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
  padding-left: 2.4rem;
  padding-top: 2rem;

  width: 100%;
  height: 4rem;
`;

const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HeaderWalletName = styled.div`
  width: auto;
  height: auto;
  flex-grow: 0;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #4f4f54;
`;

const HeaderChainName = styled.div`
  // 기능 추가해야함 (현재 네트워크 가져오는 기능)
  width: auto;
  height: auto;
  flex-grow: 0;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.36px;
  text-align: left;
  color: #4f4f54;
`;
const BoxAvatarContainer = styled.div`
  /* flex container properties */
  display: flex;
  flex-direction: row;
`;

const BoxAvatarIcon = styled.img`
  width: 10.6rem;
  height: 10.6rem;

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const BoxUserAddress = styled.div`
  width: auto;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: center;
  color: #151517;

  margin-bottom: 2rem;
`;

const BoxNicknameInput = styled.input`
  width: 31.4rem;
  height: 4.6rem;
  background-color: #fff;
  color: #bdbebe;
  border-radius: 0.8rem;
  border: solid 0.1rem #bdbebe;
  background-color: ${(props) => {
    if (props.nickname === "") {
      return "#fff";
    } else {
      if (props.isAvailabeNickname) {
        return "#bccfff";
      } else {
        return "#ffb2b2";
      }
    }
  }};

  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.042rem;
  text-align: left;
  color: #bdbebe;

  padding-left: 1.8rem;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
`;

const BoxDoneButton = styled.button`
  width: 11.8rem;
  height: 4rem;
  border-radius: 8px;
  border: solid 0px;

  ${(props) => {
    if (props.isButtonActive) {
      return "background-color: #151517; cursor:pointer";
    } else {
      return "background-color: #bdbebe";
    }
  }};

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  text-align: center;
  color: #ececec;
`;

export default function SetNicknamePage(props) {
  const { currentAccount, chainID } = props;
  const [nicknameAvailable, setNicknameAvailable] = useState(false);
  const [_nickname, _setNickname] = useState("");

  // 닉네임을 입력했을 때 중복검사 + 버튼 상태 바꾸는 함수
  const checkNicknameOverlappingAPICalling = async (_nickname) => {
    let filteringCondition = /^[a-zA-Z+]{3,20}$/;
    let willUpdate = true;
    try {
      willUpdate = filteringCondition.test(_nickname);

      if (willUpdate) {
        setNicknameAvailable(true);
      } else {
        setNicknameAvailable(false);
      }

      const params = {
        check_value: _nickname,
        chain_id: chainID,
      };

      await axios.get("https://nftranks.xyz:8888/v1/register/nickname", {
        params,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 409) {
        setNicknameAvailable(false);
      }
    }
  };

  // 신규 유저 등록하는 함수
  const sendPostToRegisterNewUser = async () => {
    try {
      const registerData = {
        chain_id: chainID,
        address: currentAccount,
        nickname: _nickname,
        email: "empty_email",
        profile_pic: "empty_profile_pic",
      };
      await axios.post("https://nftranks.xyz:8888/v1/users", registerData);
      console.log("POST");

      // sessionStorage에 유저 정보 저장해둠
      const params = {
        chain_id: chainID,
        address: currentAccount,
      };
      const response = await axios.get("https://nftranks.xyz:8888/v1/users", {
        params,
      });
      sessionStorage.setItem("user", response.data.user_id);
      sessionStorage.setItem("nickname", response.data.nickname);
      sessionStorage.setItem("myWalletAddress", currentAccount);

      const url = await window.location.href;
      const targetURL = url.slice(0, url.indexOf("connectWallet"));
      window.location.href = targetURL + "portfolio";
    } catch (ex) {
      console.log("[sendPostToRegisterNewUser] Error : ", ex);
    }
  };

  useEffect(() => {
    checkNicknameOverlappingAPICalling(_nickname);
  }, [_nickname]);

  return (
    <SetNicknamePageContainer>
      <Title>Create Your Nickname</Title>
      <SetNicknameBox>
        <BoxHeader>
          <HeaderIcon
            src="img/SetNickName_metamask_symbol.png"
            alt="nickname page wallet symbol"
          />

          <HeaderWalletName>
            {chainID === 1 && "metamask |"}
            {chainID === 2 && "coinbase |"}
            {chainID === 3 && "kaikas |"}
          </HeaderWalletName>
          <HeaderChainName>
            {chainID === 1 && " ethereum"}
            {chainID === 2 && " coinbase"}
            {chainID === 3 && " klaytn"}
          </HeaderChainName>
        </BoxHeader>
        <BoxAvatarContainer>
          <BoxAvatarIcon
            src={"img/profile_picture_" + String(1) + ".png"}
            alt="basic img"
          />
        </BoxAvatarContainer>
        <BoxUserAddress>{currentAccount}</BoxUserAddress>
        <BoxNicknameInput
          type="text"
          onChange={(event) => _setNickname(event.target.value)}
          placeholder="Nickname (max. 20 characters)"
          isAvailabeNickname={nicknameAvailable}
          nickname={_nickname}
        ></BoxNicknameInput>
        <BoxDoneButton
          isButtonActive={nicknameAvailable}
          onClick={sendPostToRegisterNewUser}
        >
          DONE
        </BoxDoneButton>
      </SetNicknameBox>
    </SetNicknamePageContainer>
  );
}
