import * as S from "./styles";
import Slider from "../Slider/Slider";
import { useState, useEffect } from "react";
import {
  MyPageInfoType,
  Product,
} from "../../../models/dto/response/productListResponse";
import ProductCard from "../../ProductCard/ProductCard";

interface PropsType {
  productInfo: MyPageInfoType;
}

const Sold = ({ productInfo }: PropsType): JSX.Element => {
  const [data, setData] = useState<Product[]>([]);

  const setItemList = () => {
    const List = productInfo.soldProducts;
    setData(List);
  };

  useEffect(() => {
    setItemList();
  }, [productInfo]);

  const [soldItem, setSoldItem] = useState<JSX.Element[]>([]);

  const getSoldComponent = (): JSX.Element[] => {
    const soldItem: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(data.length / 8 + 1); i++) {
      if (data.length <= 0) break;
      const items: JSX.Element[] = [];

      for (let j = i * 8; j < i * 8 + 8; j++) {
        if (j >= data.length) {
          items.push(<div />);
          continue;
        }
        const k: JSX.Element = <ProductCard key={j} product={data[j]} />;
        items.push(k);
      }
      const temp: JSX.Element = <S.ItemList key={i}>{items}</S.ItemList>;
      soldItem.push(temp);
    }
    return soldItem;
  };

  useEffect(() => {
    setSoldItem(getSoldComponent());
  }, [data]);

  return (
    <>
      {soldItem.length > 0 ? (
        <S.ItemContainer>
          <S.SmallTitle>판매한 물품</S.SmallTitle>
          <Slider Item={soldItem} />
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

export default Sold;
