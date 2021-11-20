import React, { useEffect, useState } from "react";
import * as S from "./style";
import { HeaderLogo, Chatting, Person, Sell } from "../../assets";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav";
import { getUserInfo } from "../../utils/api/Mypage/index";
const Header = (): JSX.Element => {
  const history = useHistory();
  const [userName, setUserName] = useState<string>("");
  const setUserInformationFunc = async () => {
    const userInfo = await getUserInfo();
    setUserName(userInfo?.data?.body?.user?.username);
  };
  useEffect(() => {
    setUserInformationFunc();
  }, []);
  const logoutBtn = (event: React.MouseEvent<HTMLElement>) => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
    alert("로그아웃 되었습니다.");
    history.push("/login");
  };
  return (
    <S.Header>
      <S.Logo to="/">
        <img src={HeaderLogo} alt="" />
        <span>대마옥션</span>
      </S.Logo>
      <nav>
        <Link to="/mypage">
          <img src={Person} alt="" />
          <span>마이페이지</span>
        </Link>
        <Nav />
      </nav>
      <div>
        <S.Chatting to="/writing">
          <img src={Sell} alt="" />
          <span>판매</span>
        </S.Chatting>
        <S.Chatting to="/chat">
          <img src={Chatting} alt="" />
          <span>채팅</span>
        </S.Chatting>
      </div>

      <S.UserInfo>
        <S.MyProfile>
          <S.ProfileCircle />
          <span>{userName}</span>
        </S.MyProfile>

        <S.LogoutBtn onClick={logoutBtn}>로그아웃</S.LogoutBtn>
      </S.UserInfo>
    </S.Header>
  );
};
//..
export default Header;
