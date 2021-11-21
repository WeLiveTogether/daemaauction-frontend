import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 60px;
  grid-column: 1/13;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ItemContainer = styled.div`
  margin-top: 24px;
`;

export const RecentItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
`;
