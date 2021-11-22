import * as S from "./styles";
import Slider from "../Slider/Slider";
import { useState, useEffect } from "react";
import { testItem, count } from "../../../assets";
import {
  MyPageInfoType,
  Product,
} from "../../../models/dto/response/productListResponse";
import ProductCard from "../../ProductCard/ProductCard";

interface PropsType {
  productInfo: MyPageInfoType;
}

const Selling = ({ productInfo }: PropsType): JSX.Element => {
  const [data, setData] = useState<Product[]>([]);

  const setItemList = () => {
    const List = productInfo.sellProducts;
    setData(List);
  };

  useEffect(() => {
    setItemList();
  }, [productInfo]);

  const [sellingItem, setSellingItem] = useState<JSX.Element[]>([]);

  const getSellingComponent = (): JSX.Element[] => {
    const sellingItem: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(data.length / 8 + 1); i++) {
      if (data.length <= 0) break;
      const items: JSX.Element[] = [];

      for (let j = i * 8; j < i * 8 + 8; j++) {
        if (j >= data.length) {
          items.push(<div />);
          continue;
        }
        const k: JSX.Element = <ProductCard product={data[j]} />;
        items.push(k);
      }
      const temp: JSX.Element = <S.ItemList>{items}</S.ItemList>;
      sellingItem.push(temp);
    }
    return sellingItem;
  };

  useEffect(() => {
    setSellingItem(getSellingComponent());
  }, [data]);

  return (
    <>
      {sellingItem.length > 0 ? (
        <S.ItemContainer>
          <S.SmallTitle>판매중인 물품</S.SmallTitle>
          <Slider Item={sellingItem} />
        </S.ItemContainer>
      ) : (
        <S.ItemContainer>
          <S.SmallTitle>판매중인 물품</S.SmallTitle>
          <S.noneItem>판매중인 물품이 없습니다.</S.noneItem>
        </S.ItemContainer>
      )}
    </>
  );
};

export default Selling;
