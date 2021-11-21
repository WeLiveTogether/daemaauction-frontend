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
`;

export const CategoryBox = styled.div`
  width: 141px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const CategoryRight = styled.div`
  display: flex;
`

export const Chevron = styled.img<{ rotate: number }>`
  transform: rotate(${(props) => props.rotate}deg);
  transition: 0.3s;
`;

export const InnerItemList = styled.div<{ display: string }>`
  margin-top: 6px;
  display: ${(props) => props.display};
  color: ${color.black};
`;

export const InnerItem = styled.div`
  padding: 4px 8px;
  background-color: ${color.white};
  :hover {
    color: ${color.white};
    background-color: ${color.green};
  }
  :first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  :last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const ItemContainer = styled.div`
  margin-top: 24px;
`;
