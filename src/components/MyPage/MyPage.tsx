import * as S from "./styles";
import Profile from "./Profile/Profile";
import Sold from "./Sold/Sold";
import Selling from "./Selling/Selling";
import { useEffect, useState } from "react";
import { getMyProduct } from "../../utils/api/Mypage";
import { MyPageProductList } from "../../models/dto/response/productListResponse";

const MyPage = (): JSX.Element => {
  const [myPageInfo, setMyPageInfo] = useState<MyPageProductList>({
    email: "",
    productResponseList: [],
    profileImageUrl: "",
    userName: ""
  });

  const count = () => {
    // console.log(myPageInfo.productResponseList[1].saleStatus);
  }

  const setMypageInfo = async () => {
    try {
      const list = (await getMyProduct()).data
      setMyPageInfo(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMypageInfo();
  }, []);

  useEffect(() => {
    count();
    console.log(myPageInfo);
  }, [myPageInfo])

  return (
    <>
      <S.Container>
        <S.Title>마이페이지</S.Title>
        <Profile myPageInfo={myPageInfo}/>
        <Sold myPageInfo={myPageInfo}/>
        <Selling myPageInfo={myPageInfo}/>
      </S.Container>
    </>
  );
};

export default MyPage;
