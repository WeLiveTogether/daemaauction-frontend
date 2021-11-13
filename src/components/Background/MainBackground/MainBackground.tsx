import { useEffect, useRef } from "react";
import Header from "../../Header/Header";
import * as S from "./styles";

type PropType = {
  children: React.ReactNode;
};

const Background = ({ children }: PropType): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundContainerRef = useRef<HTMLDivElement>(null);

  const getHeight = () => {
    const { current: container } = containerRef;
    const { current: backgroundContainer } = backgroundContainerRef;

    if (container && backgroundContainer) {
      backgroundContainer.style.height = `${document.body.clientHeight}px`;
    }
    
    return document.body.clientHeight;
  }
  
  window.onload = getHeight;

  useEffect(() => {
    getHeight();
  }, [children]);

  return (
    <>
      <Header />
      <S.BackgroundContainer ref={backgroundContainerRef}>
        <S.LeftTopYellow />
        <S.LeftTopGreen />
        <S.RightTopGreen />
        <S.RightTopYellow />
        <S.GreenPolygon />
        <S.YellowHalf />
      </S.BackgroundContainer>
      <S.Container ref={containerRef}>
        <S.GridContainer>{children}</S.GridContainer>
      </S.Container>
    </>
  );
};

export default Background;
