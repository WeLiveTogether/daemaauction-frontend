import * as S from "./styles";
import { defaultProfile } from "../../../assets";
const Profile = (): JSX.Element => {
  return (
    <>
      <S.ProfileContainer>
        <S.ProfileImg alt="profile" src={defaultProfile}/>
        <S.ProfileInfo>
          <S.ProfileInfoTop>
            <S.UserName>김진근</S.UserName>
            <S.UserNumber>2105</S.UserNumber>
          </S.ProfileInfoTop>
          <S.ItemCountContainer>
            <div>판매한 물품&nbsp;</div>
            <S.ItemCount>8개</S.ItemCount>
            <div>판매중인 물품&nbsp;</div>
            <S.ItemCount>4개</S.ItemCount>
            <div>구매한 물품&nbsp;</div>
            <S.ItemCount>12개</S.ItemCount>
          </S.ItemCountContainer>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;
