import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 100%;
  grid-column: 1/13;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 5px;
  object-position: center;
  user-select: none;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: baseline;
`;

export const TitleInner = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Title = styled.div`
  font: ${font.headline3};
  color: ${color.black};
  margin-right: 12px;
`;

export const Gray = styled.div`
  font: ${font.body3};
  color: ${color.darkGray};
`;
