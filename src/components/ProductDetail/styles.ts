import styled from "@emotion/styled";

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
