import { useRef, useState } from "react";
import { leftChevron, rightChevron } from "../../../assets";
import * as S from "./styles";

type propsType = {
  Item: JSX.Element[];
};

const Slider = ({ Item }: propsType): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const offSet = 30;

  const nextPage = () => {
    let x = container.current?.clientWidth;
    let width = page.current?.clientWidth;

    if (x !== undefined && width !== undefined) {
      if (index >= Item.length - 1) {
        setIndex(0);
        setTranslateX(0);
      } else {
        setIndex(index + 1);
        setTranslateX((index + 1) * (-x - offSet));
      }
    }
  };

  const prevPage = () => {
    let x = container.current?.clientWidth;
    let width = page.current?.clientWidth;
    if (x !== undefined && width !== undefined) {
      if (index <= 0) {
        setIndex(Item.length - 1);
        setTranslateX((Item.length - 1) * (-x - offSet));
      } else {
        setIndex(index - 1);
        setTranslateX((index - 1) * (-x - offSet));
      }
    }
  };

  return (
    <>
      <S.HiddenContainer ref={container}>
        <S.Container x={translateX} ref={page}>
          {Item}
        </S.Container>
      </S.HiddenContainer>
      <S.ChevronContainer>
        <S.PrevChevron alt="leftChevron" src={leftChevron} onClick={prevPage} />
        <S.NextChevron
          alt="rightChevron"
          src={rightChevron}
          onClick={nextPage}
        />
      </S.ChevronContainer>
    </>
  );
};

export default Slider;
