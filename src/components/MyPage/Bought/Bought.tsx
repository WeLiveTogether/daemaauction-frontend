import * as S from "./styles";
import { testItem, count, leftChevron, rightChevron } from "../../../assets";

const Bought = (): JSX.Element => {
  const boughtItem = [1, 2, 3, 4, 5, 6, 7, 8];
  const boughtItemList = boughtItem.map((_, index) => (
    <div>
      <S.ItemImg>
        <S.Transparency />
        <S.SoldText>경매 완료</S.SoldText>
        <img alt="product" src={testItem} />
      </S.ItemImg>
      <S.ItemTitle>2021년 햇꿀고구마 팝니다</S.ItemTitle>
      <S.ItemDetailTop>
        <div>음식</div>
        <div>이재성</div>
      </S.ItemDetailTop>
      <S.ItemDetailBottom>
        <S.ItemPrice>300,000₩</S.ItemPrice>
        <S.Count>
          <S.CountImg alt="count" src={count} />
          16명
        </S.Count>
      </S.ItemDetailBottom>
    </div>
  ));

  return (
    <S.ItemContainer>
      <S.SmallTitle>구매한 물품</S.SmallTitle>
      <S.ItemList>{boughtItemList}</S.ItemList>
      <S.ChevronContainer>
        <S.LeftChevron alt="leftChevron" src={leftChevron} />
        <S.RightChevron alt="rightChevron" src={rightChevron} />
      </S.ChevronContainer>
    </S.ItemContainer>
  );
};

export default Bought;
