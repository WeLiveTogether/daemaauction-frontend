import * as S from "./styles";

const ProductCardSkeleton = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Img />
        <S.Flex>
          <S.Title />
          <S.SubContainer>
            <S.Category />
            <S.Name />
          </S.SubContainer>
          <S.SubContainer>
            <S.Name />
            <S.Category />
          </S.SubContainer>
        </S.Flex>
      </S.Container>
    </>
  );
};

export default ProductCardSkeleton;
