import * as S from "./styles";
import { useEffect, useState } from "react";
import { getRecentProducts } from "../../utils/api/Recent";
import productListResponse from "../../models/dto/response/productListResponse";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

export const Recent = () => {
  const [recentItem, setRecentItem] = useState<productListResponse>([]);
  const [isRecentLoading, setIsRecentLoading] = useState<boolean>(false);

  const skeletons = [1, 2, 3, 4].map(() => {
    return <ProductCardSkeleton />;
  });

  const setItemList = async () => {
    try {
      setIsRecentLoading(true);
      const list = (await getRecentProducts()).data;
      setRecentItem(list);
      console.log(recentItem);
    } catch (error) {
      console.log(error);
    } finally {
      setIsRecentLoading(false);
    }
  };

  useEffect(() => {
    setItemList();
  }, [setRecentItem]);

  const recentItemList = recentItem.map((value) => {
    return <ProductCard product={value} key={value.productId} />;
  });

  return (
    <>
      <S.Container>
        <S.Title>최근 올라온 경매 물품</S.Title>
        <S.ItemContainer>
          <S.RecentItemList>{isRecentLoading ? skeletons : recentItemList}</S.RecentItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Recent;
