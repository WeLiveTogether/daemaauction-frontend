import * as S from "./styles";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";
import productListResponse from "../../models/dto/response/productListResponse";
import { useEffect, useState } from "react";
import { getHotProducts } from "../../utils/api/Hot";

const Hot = (): JSX.Element => {
  const [hotProductList, setHotProductList] = useState<productListResponse>([]);
  const [isHotLoading, setIsHotLoading] = useState<boolean>(false);

  const skeletons = [1, 2, 3, 4].map(() => {
    return <ProductCardSkeleton />;
  });

  const setItemList = async () => {
    try {
      setIsHotLoading(true);
      setHotProductList((await getHotProducts()).data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsHotLoading(false);
    }
  };

  useEffect(() => {
    setItemList();
  }, []);

  const hotItemList = hotProductList.map((value) => {
    return <ProductCard product={value} key={value.productId} />;
  });

  return (
    <>
      <S.Container>
        <S.Title>인기있는 경매 물품</S.Title>
        <S.ItemContainer>
          <S.HotItemList>
            {isHotLoading ? skeletons : hotItemList}
          </S.HotItemList>
        </S.ItemContainer>
      </S.Container>
    </>
  );
};

export default Hot;
