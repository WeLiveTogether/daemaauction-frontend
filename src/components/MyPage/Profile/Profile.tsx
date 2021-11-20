import * as S from "./styles";
import { defaultProfile } from "../../../assets";
import { getUserInfo } from "../../../utils/api/Mypage";
import { useEffect, useState } from "react";
const Profile = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const setUserInformationFunc = async () => {
    const userInfo = await getUserInfo();
    setUserName(userInfo?.data?.body?.user?.username);
  };
  useEffect(() => {
    setUserInformationFunc();
  }, []);
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
