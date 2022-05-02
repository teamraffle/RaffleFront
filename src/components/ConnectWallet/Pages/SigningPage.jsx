import styled from "styled-components";
import axios from "axios";

const SigningPageContainer = styled.div`
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
  margin-bottom: 2.8rem;
`;

const WalletIconBox = styled.div`
  width: 17rem;
  height: 17rem;

  margin-left: auto;
  margin-right: auto;

  margin-bottom: 3.2rem;
`;

const Text = styled.div`
  font-family: Poppins;
  font-size: 1.6rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;
`;

export default function SigningPage(props) {
  // 추가할 기능 : ( pageStep == 2 인데,  chainId 값이 이상하면 404페이지로 보내야 함.)
  const { chainID, currentAccount } = props;

  const connectMetamaskWallet = async () => {
    const { ethereum } = window;
    try {
      if (!ethereum) {
        alert("저런.. Metamask가 없으시군요?\n선택화면으로 돌아가세요.");
        props.changePageStep(2);
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      props.changeCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("[connectMetamaskWallet] ERROR : ", error);
    }
  };

  const getUsersAPICalling = async () => {
    const params = {
      chain_id: chainID,
      address: currentAccount,
    };

    try {
      const response = await axios.get("https://nftranks.xyz:8888/v1/users", {
        params,
      });

      // targetURL(포트폴리오, 랭킹 등)로 이동함
      console.log(response.data.user_id);
      sessionStorage.setItem("user", response.data.user_id);
      sessionStorage.setItem("nickname", response.data.nickname);
      sessionStorage.setItem("myWalletAddress", currentAccount);
      const url = await window.location.href;
      const targetURL = url.slice(0, url.indexOf("connectWallet"));
      window.location.href = targetURL;
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // 신규 유저 등록하러 가야함
        props.changePageStep(3);
      }
    }
  };

  // WALLET
  if (chainID === 1) {
    connectMetamaskWallet();
    getUsersAPICalling();
  }

  return (
    <SigningPageContainer>
      <Title>In Progress with:</Title>
      <WalletIconBox>
        {props.chainID === 1 && (
          <img src="img/Metamask_Loading_Icon.png" alt=" " />
        )}
        {props.chainID === 2 && <img src="img/" alt="coinbase icon" />}
        {props.chainID === 2 && <img src="img/" alt="coinbase icon" />}
      </WalletIconBox>

      <Text>please check your browser modal.</Text>
    </SigningPageContainer>
  );
}
