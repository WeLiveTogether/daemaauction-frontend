import * as S from "./styles";
import { defaultProfile } from "../../../assets";
import { MyPageProductList } from "../../../models/dto/response/productListResponse";

interface PropsType {
  myPageInfo: MyPageProductList;
  sellCount: number;
  soldCount: number;
}

const Profile = ({
  myPageInfo,
  sellCount,
  soldCount,
}: PropsType): JSX.Element => {
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
            <S.ItemCount>{soldCount}개</S.ItemCount>
            <div>판매중인 물품&nbsp;</div>
            <S.ItemCount>{sellCount}개</S.ItemCount>
          </S.ItemCountContainer>
        </S.ProfileInfo>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;
