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

export const More = styled.div`
  font-weight: medium;
  font-size: 16px;
`;

export const HotItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
`;

export const HotItem = styled.div`
  margin-bottom: 30px;
`;

export const ItemImg = styled.div`
  width: 100%;
  margin-bottom: 12px;
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
