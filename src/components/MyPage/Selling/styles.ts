import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const ChevronContainer = styled.div`
  width: 100%; 
  top: 50%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  transform: translateY(-50%);
`

export const LeftChevron = styled.img`
  position: relative;
  transform: translateX(-48px);
  `

export const RightChevron = styled.img`
  position: relative;
  transform: translateX(48px);
`

export const SmallTitle = styled.div`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 400;
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
