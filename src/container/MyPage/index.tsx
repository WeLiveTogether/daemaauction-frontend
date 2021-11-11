import Background from "../../components/Background/MainBackground/MainBackground";
import MyPage from "../../components/MyPage/MyPage";

const MyPageContainer = (): JSX.Element => {
  return (
    <>
      <Background>
        <MyPage />
      </Background>
    </>
  );
};

export default MyPageContainer;
