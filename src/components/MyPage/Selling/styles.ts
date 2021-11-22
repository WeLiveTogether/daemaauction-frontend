import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const SmallTitle = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 400;
`;

export const noneItem = styled.div`
  text-align: center;
  margin-top: 301px;
  margin-bottom: 317px;
  color: #8395a7;
  font-weight: 400px;
  font-size: 24px;
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
`;

export const Item = styled.div`
  margin-bottom: 30px;
`;

export const ItemImg = styled.div`
  width: 256px;
  height: 194px;
  margin-bottom: 12px;
  position: relative;
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
