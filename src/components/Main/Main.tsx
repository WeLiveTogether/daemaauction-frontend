import * as S from "./styles";
import { getPopularProducts, getLatestProducts } from "../../utils/api/Main";
import { useEffect, useState } from "react";
import productListResponse from "../../models/dto/response/productListResponse";
import ProductCard from "../ProductCard/ProductCard";
const Main = (): JSX.Element => {
  const [hotProductList, setHotProductList] = useState<productListResponse>([]);
  const [latestProductList, setLatestProductList] = useState<productListResponse>([]);

  const setPopularProducts = async () => {
    try {
      const list = (await getPopularProducts()).data.slice(0, 8);
      setHotProductList(list);
    } catch (error) {
      console.log(error);
    }
  };

  const setLatestProducts = async () => {
    try {
      const list = (await getLatestProducts()).data;
      setLatestProductList(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPopularProducts();
    setLatestProducts();
  }, []);

  const hotItemListRender = hotProductList.map((value) => {
    return <ProductCard product={value} key={value.productId} />;
  });

  const recentlyItemList: JSX.Element[] = latestProductList.map((value) => {
    return <ProductCard product={value} key={value.productId} />;
  });

  return (
    <>
      <S.Container>
        <S.Title>대마켓에 오신걸 환영합니다!</S.Title>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>인기있는 경매 물품</S.SmallTitle>
            <S.More>더보기 </S.More>
          </S.SmallHeader>
          <S.HotItemList>{hotItemListRender}</S.HotItemList>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>최근 올라온 경매 물품</S.SmallTitle>
            <S.More>더보기 </S.More>
          </S.SmallHeader>
          <S.HotItemList>{recentlyItemList}</S.HotItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Main;
