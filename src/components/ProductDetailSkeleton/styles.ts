import styled from "@emotion/styled";
import { color } from "../../styles/color";

export const Container = styled.div`
  width: 100%;
  grid-column: 1/13;
  margin-top: 60px;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 5px;
  background-color: ${color.gray};
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: baseline;
`;

export const TitleInner = styled.div`
  display: flex;
  width: 80%;
  column-gap: 16px;
  align-items: baseline;
`;

export const Title = styled.div`
  background-color: ${color.gray};
  height: 24px;
  width: 80%;
`;

export const Gray1 = styled.div`
  background-color: ${color.gray};
  height: 20px;
  width: 10%;
`;

export const Gray2 = styled.div`
  background-color: ${color.gray};
  height: 20px;
  width: 20%;
`;

export const Gray3 = styled.div`
  background-color: ${color.gray};
  height: 20px;
  width: 30%;
`;

export const Gray4 = styled.div`
  background-color: ${color.gray};
  height: 20px;
  width: 5%;
`;
