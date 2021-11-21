import { useEffect, useLayoutEffect, useState } from "react";
import { Select } from "../../assets";
import DropDown from "./DropDown/DropDown";
import * as S from "./styled";
interface PropsType {
  bigCategoryParam: string | null;
  subCategoryParam: string | null;
}

const Category = ({ bigCategoryParam, subCategoryParam }: PropsType) => {
  const bigCategorys = ["의류", "전자기기", "음식", "도서", "생활용품", "완구/취미"];
  const subCategorys = new Map<string, string[]>()
    .set(bigCategorys[0], ["전체", "상의", "하의", "액세서리", "신발", "성별"])
    .set(bigCategorys[1], ["전체", "생활", "컴퓨터/노트북", "주변기기"])
    .set(bigCategorys[2], ["전체", "기프티콘", "과자/젤리/빵", "음료"])
    .set(bigCategorys[3], ["전체", "전공도서", "교양도서"])
    .set(bigCategorys[4], ["전체", "세탁용품", "욕실용품", "청소용품", "책상/진열대/수납"])
    .set(bigCategorys[5], ["전체", "악기", "장난감", "보드게임/카드", "기타용품"]);

  const [isBigActive, setIsBigActive] = useState<boolean>(false);
  const [isSubActive, setIsSubActive] = useState<boolean>(false);
  const [bigIndex, setBigIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState<number>(0);

  useLayoutEffect(() => {
    try {
      const bigI = bigCategoryParam ? bigCategorys.indexOf(bigCategoryParam) : 0;
      const subList = subCategorys.get(bigCategorys[bigI]);
      const subI =
        bigCategoryParam && subCategoryParam && subList ? subList.indexOf(subCategoryParam) : 0;
      setBigIndex(bigI);
      setBigIndex(subI);
    } catch (error) {
      setBigIndex(0);
      setBigIndex(0);
    }
  }, [bigCategoryParam, subCategoryParam]);

  const changeBigCategory = (index: number) => {
    setIsBigActive(false);
    setBigIndex(index);
    setSubIndex(0);
  };

  const changeSubCategory = (index: number) => {
    setIsSubActive(false);
    setSubIndex(index);
  };

  const renderSubName = () => {
    if (!subCategorys) return <></>;

    const list = subCategorys.get(bigCategorys[bigIndex]);

    if (!list) return <></>;

    return (
      <>
        <div>{list[subIndex]}</div>&nbsp;
      </>
    );
  };

  return (
    <S.Container>
      <S.CategoryContainer>
        <S.Title>카테고리</S.Title>
        <S.Category>
          <div>
            <S.CategoryBox onClick={() => setIsBigActive(!isBigActive)}>
              <div>대분류 :&nbsp;&nbsp;</div>
              <S.CategoryRight>
                <div>{bigCategorys[bigIndex]}</div>&nbsp;
                <S.Chevron src={Select} alt="chevron" rotate={isBigActive ? 180 : 360} />
              </S.CategoryRight>
            </S.CategoryBox>
            <DropDown
              array={bigCategorys}
              selected={bigIndex}
              isActive={isBigActive}
              setSelected={(index: number) => changeBigCategory(index)}
            />
          </div>

          <div>
            <S.CategoryBox onClick={() => setIsSubActive(!isSubActive)}>
              <div>소분류 :&nbsp;&nbsp;</div>
              {renderSubName()}
              <S.Chevron src={Select} alt="chevron" rotate={isSubActive ? 180 : 360} />
            </S.CategoryBox>
            <DropDown
              array={subCategorys.get(bigCategorys[bigIndex])!}
              selected={subIndex}
              isActive={isSubActive}
              setSelected={(index: number) => changeSubCategory(index)}
            />
          </div>
        </S.Category>
      </S.CategoryContainer>

      <S.ItemContainer></S.ItemContainer>
    </S.Container>
  );
};

export default Category;
