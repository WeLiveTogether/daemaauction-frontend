import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  margin-top: 60px;
  grid-column: 1/13;
`;

export const Title = styled.div`
  font: ${font.headline3};
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 16px;
  font: ${font.body3};
  position: relative;
`;

export const CategoryBox = styled.div`
  /* max: 200px; */
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CategoryRight = styled.div`
  display: flex;
`;

export const Chevron = styled.img<{ rotate: number }>`
  transform: rotate(${(props) => props.rotate}deg);
  transition: 0.3s;
`;

export const ItemContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
`;

export const ItemNone = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${font.subtitle};
  color: ${color.black};
  background-color: ${color.lightGray};
  border-radius: 5px;
`;
