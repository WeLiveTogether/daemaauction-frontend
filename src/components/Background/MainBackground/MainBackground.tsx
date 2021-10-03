import * as S from "./styles";

type PropType = {
  children: React.ReactNode;
};

const Background = ({ children }: PropType): JSX.Element => {
  return (
    <>
      <S.LeftTopYellow />
      <S.LeftTopGreen />
      <S.RightTopGreen />
      <S.RightTopYellow />
      <S.GreenPolygon />
      <S.YellowHalf />
      <S.Container>
        <S.GridContainer>{children}</S.GridContainer>
      </S.Container>
    </>
  );
};

export default Background;
