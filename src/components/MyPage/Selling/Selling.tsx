import * as S from "./styles";
import Slider from "../Slider/Slider";
import { useState, useEffect } from "react";
import { testItem, count } from "../../../assets";
import { MyPageProductList } from "../../../models/dto/response/productListResponse";

interface PropsType {
  myPageInfo: MyPageProductList;
}

const Selling = ( { myPageInfo}: PropsType): JSX.Element => {
  const itemList = [1, 2, 3, 4, 5, 6];

  const [sellingItem, setSellingItem] = useState<JSX.Element[]>([]);

  const getSellingComponent = (): JSX.Element[] => {
    const sellingItem: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(itemList.length / 8 + 1); i++) {
      if (itemList.length <= 0) break;
      const items: JSX.Element[] = [];

      for (let j = i * 8; j < i * 8 + 8; j++) {
        if (j >= itemList.length) {
          items.push(<div />);
          continue;
        }
        const k: JSX.Element = (
          <div>
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
                14명
              </S.Count>
            </S.ItemDetailBottom>
          </div>
        );
        items.push(k);
      }
      const temp: JSX.Element = <S.ItemList>{items}</S.ItemList>;
      sellingItem.push(temp);
    }
    return sellingItem;
  };

  useEffect(() => {
    setSellingItem(getSellingComponent());
  }, []);

  return (
    <>
      {sellingItem.length > 0 ? (
        <S.ItemContainer>
          <S.SmallTitle>판매중인 물품</S.SmallTitle>
          <Slider Item={sellingItem} />
        </S.ItemContainer>
      ) : (
        <S.ItemContainer>
          <S.SmallTitle>판매한 물품</S.SmallTitle>
          <S.noneItem>판매한 물품이 없습니다.</S.noneItem>
        </S.ItemContainer>
      )}
    </>
  );
};

export default Selling;
