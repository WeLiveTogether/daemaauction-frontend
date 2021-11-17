import { useEffect, useRef } from "react";
import Header from "../../Header/Header";
import * as S from "./styles";

type PropType = {
  children: React.ReactNode;
};

const Background = ({ children }: PropType): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundContainerRef = useRef<HTMLDivElement>(null);

  const onScroll = () => {
    if (backgroundContainerRef.current) {
      backgroundContainerRef.current.style.transform = `translateY(-${window.scrollY * 0.1}px)`;
    }
  };

  useEffect(() => {
    window.onscroll = onScroll;
  }, []);

  return (
    <>
      <Header />
      <S.BackgroundContainer>
        <S.BackgroundInner ref={backgroundContainerRef}>
          <S.LeftTopYellow />
          <S.LeftTopGreen />
          <S.RightTopGreen />
          <S.RightTopYellow />
          <S.GreenPolygon />
          <S.YellowHalf />
        </S.BackgroundInner>
      </S.BackgroundContainer>
      <S.Container ref={containerRef}>
        <S.GridContainer>{children}</S.GridContainer>
      </S.Container>
    </>
  );
};

export default Background;
