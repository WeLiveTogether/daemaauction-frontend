import * as S from "./styles";
import { count , testItem } from '../../assets/index';
const Hot = (): JSX.Element => {

  const hotItem = [1,2,3,4,5,6,7,8];

  const hotItemList = hotItem.map((_, index) => (
    <S.HotItem key={index}>
      <S.ItemImg>
        <img alt="productImg" src={testItem}/>
      </S.ItemImg>
      <S.ItemTitle>
        2021년 햇꿀고구마 팝니다.
      </S.ItemTitle>
      <S.ItemDetailTop>
        <div>전자기기</div>
        <div>김진근</div>
      </S.ItemDetailTop>
      <S.ItemDetailBottom>
        <S.ItemPrice>
          700,000₩
        </S.ItemPrice>
        <S.Count>
          <S.CountImg alt="productImg" src={count} />
          16명
        </S.Count>
      </S.ItemDetailBottom>
    </S.HotItem>
  ));

  return (
    <>
      <S.Container>
        <S.Title>
          인기있는 경매 물품
        </S.Title>
        <S.ItemContainer>
          <S.HotItemList>
            {hotItemList}
          </S.HotItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Hot;
