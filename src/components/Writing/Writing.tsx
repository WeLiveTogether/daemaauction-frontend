import React from "react";
import * as S from "./styles";
const category = [
  { name: "의류" },
  { name: "전자제품" },
  { name: "음식" },
  { name: "도서" },
  { name: "생활용품" },
  { name: "완구/취미" },
];
const smallCategory = [
  { name: "상의" },
  { name: "하의" },
  { name: "액세서리" },
  { name: "신발" },
  { name: "성별" },
];
const Writing = () => {
  return (
    <S.Container>
      <S.Title>경매 글 작성</S.Title>
      <S.ImgWrapper>
        <S.AddImg htmlFor="getFile">+ 사진추가</S.AddImg>
        <input type="file" id="getFile" style={{ display: "none" }} />
      </S.ImgWrapper>
      <S.ItemInfo>
        <S.ItemPrice>
          <div>
            즉시 구매가 : <S.PriceInput /> 💰
          </div>
          <div>
            경매 시작가 : <S.PriceInput /> 💰
          </div>
        </S.ItemPrice>
        <S.TimeWrapper>
          <div>
            시간 : <S.TimeInput /> h
          </div>
        </S.TimeWrapper>
        <S.CategoryWrapper>
          <span>카테고리</span>
          <S.CategoryItem>
            {category.map((category, i) => (
              <span key={i}>{category.name}</span>
            ))}
          </S.CategoryItem>
        </S.CategoryWrapper>
        <S.CategoryWrapper>
          <span>소분류</span>
          <S.CategoryItem>
            {smallCategory.map((category, i) => (
              <span key={i}>{category.name}</span>
            ))}
          </S.CategoryItem>
        </S.CategoryWrapper>
        <S.TitleInput placeholder="제목을 입력해주세요" />
        <S.TitleTextarea placeholder="내용을 입력해주세요" />
      </S.ItemInfo>
      <S.SubmitBtn>경매 글 제시</S.SubmitBtn>
    </S.Container>
  );
};

export default Writing;
