import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
`;

export const ItemList = styled.div<{ x: number }>`
  transform: translateX(${(props) => props.x}px);
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  column-gap: 30px;
`;

export const Button = styled.div<{ left: number }>`
  position: absolute;
  user-select: none;
  left: ${(props) => props.left}%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${color.lightGray};
  color: ${color.black};
  font: ${font.headline1};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const DotContainer = styled.div`
  display: flex;
  column-gap: 8px;
  top: 95%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: absolute;
`;

export const Dot = styled.div`
  background-color: ${(props) => props.color};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
`;
