import { useLayoutEffect, useRef, useState } from "react";
import { color } from "../../styles/color";
import * as S from "./styles";

interface PropsType {
  items: JSX.Element[];
}

const Slider = ({ items }: PropsType): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const gap = 30;

  const size = items.length;

  const moveIndex = (offset: number) => {
    const changeIndex = index + offset;

    if (changeIndex < 0 || changeIndex > size - 1) {
      return;
    }

    setIndex(changeIndex);
  };

  const onNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    moveIndex(1);
  };

  const onPrev = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    moveIndex(-1);
  };

  useLayoutEffect(() => {
    const itemWidth = container.current?.clientWidth!;
    console.log(itemWidth);

    list.current!.style.width = `${itemWidth * size + (size - 1) * gap}px`;
  }, [items]);

  useLayoutEffect(() => {
    const itemWidth = container.current?.clientWidth!;
    setX((itemWidth + gap) * index);
  }, [index]);

  return (
    <div>
      <S.Container ref={container}>
        <S.SliderContainer>
          <S.ItemList x={-x} ref={list}>
            {items}
          </S.ItemList>
        </S.SliderContainer>
        {index !== 0 && (
          <S.Button onClick={onPrev} left={0}>
            
          </S.Button>
        )}
        {size - 1 !== index && (
          <S.Button onClick={onNext} left={100}>
            
          </S.Button>
        )}
        <S.DotContainer>
          {items.map((_, i) => {
            return (
              <S.Dot
                color={index === i ? color.green : color.white}
                onClick={() => {
                  setIndex(i);
                }}
              />
            );
          })}
        </S.DotContainer>
      </S.Container>
    </div>
  );
};

export default Slider;
