import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const HotItem = styled.div`
  margin-bottom: 30px;
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
