import { useLayoutEffect } from "react";
import * as S from "./styles";

const ProductCardSkeleton = (): JSX.Element => {
  function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <S.Container>
        <S.Img delay={getRandomArbitrary(0, 3)} />
        <S.Flex>
          <S.Title delay={getRandomArbitrary(0, 3)} />
          <S.SubContainer>
            <S.Category delay={getRandomArbitrary(0, 3)} />
            <S.Name delay={getRandomArbitrary(0, 3)} />
          </S.SubContainer>
          <S.SubContainer>
            <S.Name delay={getRandomArbitrary(0, 3)} />
            <S.Category delay={getRandomArbitrary(0, 3)} />
          </S.SubContainer>
        </S.Flex>
      </S.Container>
    </>
  );
};

export default ProductCardSkeleton;
