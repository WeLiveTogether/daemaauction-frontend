import * as S from "./styles";
import Profile from "./Profile/Profile";
import Sold from "./Sold/Sold";
import Selling from "./Selling/Selling";
import { useEffect, useState } from "react";
import { getMyProduct } from "../../utils/api/Mypage";
import {
  MyPageInfoType,
  MyPageProductList,
} from "../../models/dto/response/productListResponse";

const MyPage = (): JSX.Element => {
  const [myPageInfo, setMyPageInfo] = useState<MyPageProductList>({
    email: "",
    productResponseList: [],
    profileImageUrl: "",
    userName: "",
  });

  const [products, setProducts] = useState<MyPageInfoType>({
    soldCount: 0,
    sellCount: 0,
    soldProducts: [],
    sellProducts: [],
  });

  const setProduct = () => {
    const Data = myPageInfo.productResponseList;
    if (myPageInfo.productResponseList.length > 0) {
      const setSell = Data.filter((value) => value.saleStatus === "ON_SALE");
      const setSold = Data.filter((value) => value.saleStatus === "SOLD_OUT");

      setProducts({
        ...products,
        soldCount: setSold.length,
        sellCount: setSell.length,
        soldProducts: products.soldProducts.concat(setSold),
        sellProducts: products.sellProducts.concat(setSell),
      });
    }
  };

  const setMypageInfo = async () => {
    try {
      const list = (await getMyProduct()).data;
      setMyPageInfo(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMypageInfo();
  }, []);

  useEffect(() => {
    setProduct();
  }, [myPageInfo]);

  return (
    <>
      <S.Container>
        <S.Title>마이페이지</S.Title>
        <Profile
          myPageInfo={myPageInfo}
          sellCount={products.sellCount}
          soldCount={products.soldCount}
        />
        <Sold productInfo={products} />
        <Selling productInfo={products} />
      </S.Container>
    </>
  );
};

export default MyPage;
