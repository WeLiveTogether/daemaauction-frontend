import * as S from "./styles";
import { getPopularProducts, getLatestProducts } from "../../utils/api/Main";
import { useEffect, useState } from "react";
import productListResponse from "../../models/dto/response/productListResponse";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
const Main = (): JSX.Element => {
  const [hotProductList, setHotProductList] = useState<productListResponse>([]);
  const [latestProductList, setLatestProductList] =
    useState<productListResponse>([]);
  const [isPopularLoading, setIsPopularLoading] = useState<boolean>(false);
  const [isLatestLoading, setIsLatestLoading] = useState<boolean>(false);

  const skeletons = [1, 2, 3, 4].map(() => {
    return <ProductCardSkeleton />;
  });

  const setPopularProducts = async () => {
    try {
      setIsPopularLoading(true);
      const list = (await getPopularProducts()).data.slice(0, 8);
      setHotProductList(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPopularLoading(false);
    }
  };

  const setLatestProducts = async () => {
    try {
      setIsLatestLoading(true);
      const list = (await getLatestProducts()).data;
      setLatestProductList(list);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLatestLoading(false);
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
        <S.Title>대마옥션에 오신걸 환영합니다!</S.Title>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>인기있는 경매 물품</S.SmallTitle>
            <S.StyledLink to="/">더보기 </S.StyledLink>
          </S.SmallHeader>
          <S.HotItemList>
            {isPopularLoading ? skeletons : hotItemListRender}
          </S.HotItemList>
        </S.ItemContainer>
        <S.ItemContainer>
          <S.SmallHeader>
            <S.SmallTitle>최근 올라온 경매 물품</S.SmallTitle>
            <S.StyledLink to="/">더보기 </S.StyledLink>
          </S.SmallHeader>
          <S.HotItemList>
            {isLatestLoading ? skeletons : recentlyItemList}{" "}
          </S.HotItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Main;
