import * as S from "./styles";
import { defaultProfile } from "../../../assets";
import { useEffect, useState } from "react";
import { MyPageProductList, Product } from "../../../models/dto/response/productListResponse";

interface PropsType {
  myPageInfo: MyPageProductList;
}

const Profile = ({ myPageInfo }: PropsType): JSX.Element => {
  const { userName } = myPageInfo;


  return (
    <>
      <S.ProfileContainer>
        <S.ProfileImg alt="profile" src={defaultProfile} />
        <S.ProfileInfo>
          <S.ProfileInfoTop>
            <S.UserName>{userName}</S.UserName>
          </S.ProfileInfoTop>
          <S.ItemCountContainer>
            <div>판매한 물품&nbsp;</div>
            <S.ItemCount>21개</S.ItemCount>
            <div>판매중인 물품&nbsp;</div>
            <S.ItemCount>6개</S.ItemCount>
            <div>구매한 물품&nbsp;</div>
            <S.ItemCount>15개</S.ItemCount>
          </S.ItemCountContainer>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;
