import { useEffect, useState } from "react";
import { Select } from "../../assets";
import { NavArr, optionArr } from "../Header/Nav";
import * as S from "./styled";

const Category = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [bigCategory, setBigCategory] = useState<string>("");

  useEffect(() => {
    setBigCategory(NavArr[0]);
  }, []);

  const activeChevron = () => {
    setIsActive(!isActive);
    if (isActive) {
    } else {
    }
  };

  const changeBigCategory = (text: string) => {
    setBigCategory(text);
    setIsActive(false);
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        <S.Title>카테고리</S.Title>
        <S.Category>
          {/* 맵으로 두개를 만들어볼까 생각해서 둔거 */}
          {/* {NavArr.map(() => {
            return (
              <S.CategoryBox onClick={() => {activeChevron()}}>
              <div>대분류 :&nbsp;&nbsp;</div>
              <div>{}</div>&nbsp;
              <S.Chevron
                src={Select}
                alt="chevron"
                rotate={isActive ? 180 : 360}
              />
            </S.CategoryBox>
            )
          })} */}

          <div>
            <S.CategoryBox
              onClick={() => {
                activeChevron();
              }}
            >
              <div>대분류 :&nbsp;&nbsp;</div>
              <S.CategoryRight>
                <div>{bigCategory}</div>&nbsp;
                <S.Chevron
                  src={Select}
                  alt="chevron"
                  rotate={isActive ? 180 : 360}
                />
              </S.CategoryRight>
            </S.CategoryBox>
            <S.InnerItemList display={isActive ? "block" : "none"}>
              {NavArr.map((value, i) => {
                return (
                  <S.InnerItem key={i} onClick={() => changeBigCategory(value)}>
                    {value}
                  </S.InnerItem>
                );
              })}
            </S.InnerItemList>
          </div>

          {/* 서브 카테고리 */}
          {/* <div>
            <S.CategoryBox
              onClick={() => {
                activeChevron();
              }}
            >
              <div>소분류 :&nbsp;&nbsp;</div>
              <div>상의</div>&nbsp;
              <S.Chevron
                src={Select}
                alt="chevron"
                rotate={isActive ? 180 : 360}
              />
            </S.CategoryBox>
            <S.InnerItemList display={isActive ? "block" : "none"}>
              <div>123</div>
            </S.InnerItemList>
          </div> */}
        </S.Category>
      </S.CategoryContainer>

      <S.ItemContainer></S.ItemContainer>
    </S.Container>
  );
};

export default Category;
