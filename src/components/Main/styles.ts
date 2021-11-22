import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color } from "../../styles/color";

export const Container = styled.div`
  margin-top: 60px;
  grid-column: 1/13;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
export const ItemContainer = styled.div`
  margin-top: 80px;
`;

export const SmallHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const SmallTitle = styled.div`
  font-weight: medium;
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${color.black};
`;

export const More = styled.div`
  font-weight: medium;
  font-size: 16px;
`;

export const HotItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
`;
