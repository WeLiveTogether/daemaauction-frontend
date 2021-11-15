import React from "react";
import * as S from "./style";
import { HeaderLogo, Chatting, Person } from "../../assets";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const Header = (): JSX.Element => {
  return (
    <S.Header>
      <S.Logo to="#">
        <img src={HeaderLogo} alt="" />
        <span>대마옥션</span>
      </S.Logo>
      <nav>
        <Link to="#">
          <img src={Person} alt="" />
          <span>마이페이지</span>
        </Link>
        <Nav />
      </nav>
      <S.Chatting to="#">
        <img src={Chatting} alt="" />
        <span>채팅</span>
      </S.Chatting>
      <S.UserInfo>
        <S.MyProfile>
          <S.ProfileCircle />
          <span>김진근</span>
        </S.MyProfile>
        <S.LogoutBtn>로그아웃</S.LogoutBtn>
      </S.UserInfo>
    </S.Header>
  );
};

export default Header;
