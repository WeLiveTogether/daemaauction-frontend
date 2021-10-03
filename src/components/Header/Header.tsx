import React from "react";
import * as S from "./style";
import { HeaderLogo, Chatting, Person } from "../../assets";

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <div>
        <img src={HeaderLogo} alt="" />
        <span>대마켓</span>
      </div>
      <nav>
        <div>
          <img src={Person} alt="" />
          <span>마이페이지</span>
        </div>
        <span>의류</span>
        <span>전자기기</span>
        <span>음식</span>
        <span>도서</span>
        <span>생활용품</span>
        <span>완구/취미</span>
      </nav>
      <div>
        <img src={Chatting} alt="" />
        <span>채팅</span>
      </div>
      <S.MyProfile>
        <S.ProfileCircle />
        <span>김진근</span>
      </S.MyProfile>
    </S.Header>
  );
};

export default Header;
