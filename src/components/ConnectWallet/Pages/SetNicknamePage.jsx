import styled from "styled-components";

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
  background-color: #fff;

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

  &::placehorder {
  }
`;

const BoxDoneButton = styled.button`
  width: 11.8rem;
  height: 4rem;
  border-radius: 8px;
  border: solid 0px;
  background: #bdbebe;

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
  const { currentAccount, chainID, nicknameAvailable } = props;
  const setNickname = (_nickname) => {
    props.changeNickname(_nickname);
  };
  const buttonSendPostActive = () => {
    props.buttonSendPostActive();
  };
  const buttonSendPostInactive = () => {
    props.buttonSendPostInactive();
  };
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

        <BoxAvatarIcon src="img/SetNickName_Avatar_Image.png" alt="basic img" />

        <BoxUserAddress>{currentAccount}</BoxUserAddress>
        <BoxNicknameInput
          type="text"
          onChange={(event) => setNickname(event.target.value)}
          placeholder="Nickname (max. 20 characters)"
        ></BoxNicknameInput>
        <BoxDoneButton>
          {nicknameAvailable
            ? buttonSendPostActive()
            : buttonSendPostInactive()}
          DONE
        </BoxDoneButton>
      </SetNicknameBox>
    </SetNicknamePageContainer>
  );
}
