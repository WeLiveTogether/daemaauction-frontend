import * as S from "./styles";
import Profile from "./Profile/Profile";
import Sold from "./Sold/Sold";
import Selling from "./Selling/Selling";
import Bought from "./Bought/Bought";

const MyPage = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Title>마이페이지</S.Title>
        <Profile />
        <Sold />
        <Selling />
        <Bought />
      </S.Container>
    </>
  );
};

export default MyPage;
