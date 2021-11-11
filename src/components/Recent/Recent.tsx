import * as S from "./styles";
import { count, testItem } from "../../assets/index";
export const Recent = () => {
  const recentItem = [1, 2, 3, 4, 5, 6, 7, 8];

  const recentItemList = recentItem.map((_, index) => (
    <S.RecentItem key={index}>
      <S.ItemImg>
        <img alt="productImg" src={testItem} />
      </S.ItemImg>
      <S.ItemTitle>2021년 햇꿀고구마 팝니다.</S.ItemTitle>
      <S.ItemDetailTop>
        <div>전자기기</div>
        <div>김진근</div>
      </S.ItemDetailTop>
      <S.ItemDetailBottom>
        <S.ItemPrice>700,000₩</S.ItemPrice>
        <S.Count>
          <S.CountImg alt="productImg" src={count} />
          16명
        </S.Count>
      </S.ItemDetailBottom>
    </S.RecentItem>
  ));

  return (
    <>
      <S.Container>
        <S.Title>최근 올라온 경매 물품</S.Title>
        <S.ItemContainer>
          <S.RecentItemList>{recentItemList}</S.RecentItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Recent;
