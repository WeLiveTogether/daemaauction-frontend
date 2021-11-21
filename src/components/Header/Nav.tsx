import React from "react";
import * as S from "./style";
import { Select } from "../../assets";
export const NavArr = ["의류", "전자기기", "음식", "도서", "생활용품", "완구/취미"];
export const optionArr = [
  [
    { value: "", name: "상의" },
    { value: "", name: "하의" },
    { value: "", name: "액세서리" },
    { value: "", name: "신발" },
    { value: "", name: "성별" },
  ],
  [
    { value: "", name: "생활" },
    { value: "", name: "컴퓨터/노트북" },
    { value: "", name: "주변기기" },
  ],
  [
    { value: "", name: "기프티콘" },
    { value: "", name: "과자/젤리/빵" },
    { value: "", name: "음료" },
  ],
  [
    { value: "", name: "전공도서" },
    { value: "", name: "교양도서" },
  ],
  [
    { value: "", name: "세탁용품" },
    { value: "", name: "욕실용품" },
    { value: "", name: "청소용품" },
    { value: "", name: "책상/진열대/수납" },
  ],
  [
    { value: "", name: "악기" },
    { value: "", name: "장난감" },
    { value: "", name: "보드게임/카드" },
    { value: "", name: "기타용품" },
  ],
];
const Nav = () => {
  return (
    <S.NavWrapper>
      {NavArr.map((nav, i) => (
        <S.NavItem to="#" key={i}>
          <div className="navItemTitle" style={{ cursor: "pointer" }}>
            {nav}
            <img src={Select} alt="" />
          </div>
          {optionArr[i].map((option, i) => (
            <S.NavItemInner className="navItem" key={i}>
              {option.name}
            </S.NavItemInner>
          ))}
        </S.NavItem>
      ))}
    </S.NavWrapper>
  );
};

export default Nav;
