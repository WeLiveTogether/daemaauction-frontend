import * as S from "./styles";

const ProductDetailSkeleton = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ImageContainer>
          <S.Image />
        </S.ImageContainer>
        <S.HeaderContainer>
          <S.TitleContainer>
            <S.TitleInner>
              <S.Title />
              <S.Gray1 />
            </S.TitleInner>
            <S.Gray2 />
          </S.TitleContainer>
          <S.Gray3 />
          <S.Gray4 />
        </S.HeaderContainer>
      </S.Container>
    </>
  );
};

export default ProductDetailSkeleton;
