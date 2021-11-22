import React from "react";
import * as S from "./style";
import { Select } from "../../assets";
import { useHistory } from "react-router";
const NavArr = ["의류", "전자기기", "음식", "도서", "생활용품", "완구/취미"];
export const optionArr = [
  ["상의", "하의", "액세서리", "신발", "성별"],
  ["생활", "컴퓨터/노트북", "주변기기"],
  ["기프티콘", "과자/젤리/빵", "음료"],
  ["전공도서", "교양도서"],
  ["세탁용품", "욕실용품", "청소용품", "책상/진열대/수납"],
  ["악기", "장난감", "보드게임/카드", "기타용품"],
];
const Nav = () => {
  const onClick = (nav: string) => {
    window.location.href = `/category?category=${nav}`;
  };

  const onClicksubCategory = (option: string, nav: string) => {
    window.location.href = `/category?category=${nav}&subcategory=${option}`;
  };

  return (
    <S.NavWrapper>
      {NavArr.map((nav, i) => (
        <S.NavItem to="#" key={i}>
          <div className="navItemTitle" style={{ cursor: "pointer" }} onClick={() => onClick(nav)}>
            {nav}
            <img src={Select} alt="" />
          </div>
          {optionArr[i].map((option, i) => (
            <S.NavItemInner
              className="navItem"
              key={i}
              onClick={() => onClicksubCategory(option, nav)}
            >
              {option}
            </S.NavItemInner>
          ))}
        </S.NavItem>
      ))}
    </S.NavWrapper>
  );
};

export default Nav;
