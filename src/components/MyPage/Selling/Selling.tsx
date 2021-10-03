import * as S from "./styles";
import { testItem, count, leftChevron, rightChevron } from "../../../assets";

const Selling = (): JSX.Element => {
  const sellingItem = [1, 2, 3, 4, 5, 6, 7, 8];
  const sellingItemList = sellingItem.map((_, index) => (
    <S.Item>
      <S.ItemImg>
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
    </S.Item>
  ));

  return (
    <>
      <S.ItemContainer>
        <S.SmallTitle>판매중인 물품</S.SmallTitle>
        <S.ItemList>{sellingItemList}</S.ItemList>
        <S.ChevronContainer>
          <S.LeftChevron alt="leftChevron" src={leftChevron} />
          <S.RightChevron alt="rightChevron" src={rightChevron} />
        </S.ChevronContainer>
      </S.ItemContainer>
    </>
  );
};

export default Selling;
