import * as S from "./styles";
import { count , testItem } from '../../assets/index';
const Main = (): JSX.Element => {

  const hotItem = [1,2,3,4,5,6,7,8];
  const recentlyItem = [1,2,3,4,5,6,7,8,9,10,11,12];

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

  const recentlyItemList = recentlyItem.map((_, index) => (
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
        <S.Title>대마켓에 오신걸 환영합니다!</S.Title>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>
              인기있는 경매 물품
            </S.SmallTitle>
            <S.More>
              더보기 
            </S.More>
          </S.SmallHeader>
          <S.HotItemList>
            {hotItemList}
          </S.HotItemList>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>
              최근 올라온 경매 물품
            </S.SmallTitle>
            <S.More>
              더보기 
            </S.More>
          </S.SmallHeader>
          <S.HotItemList>
            {recentlyItemList}
          </S.HotItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Main;
