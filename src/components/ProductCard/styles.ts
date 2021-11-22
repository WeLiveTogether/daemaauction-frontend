import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.button`
  width: 100%;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 5px;
  background-color: transparent;
  position: relative;
  text-align: left;
  &:active {
    background-color: ${color.black}30;
  }
`;

export const Cover = styled.div`
  background-color: ${color.black}90;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${font.subtitle};
  color: ${color.white};
  border-radius: 5px;
  z-index: 100;
`;

export const ItemImg = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

export const Img = styled.img`
  aspect-ratio: 4 / 3;
  width: 100%;
  border-radius: 5px;
  object-position: center;
  object-fit: cover;
`;

export const ItemTitle = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const ItemDetailTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 400;
  color: #8395a7;
  margin-bottom: 8px;
`;

export const ItemDetailBottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: medium;
`;

export const ItemPrice = styled.div`
  color: #1cd0a1;
`;

export const CountImg = styled.img`
  margin-right: 8px;
`;

export const Count = styled.div`
  color: #212f3e;
`;
