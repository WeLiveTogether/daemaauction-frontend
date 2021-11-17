import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { color } from "../../styles/color";

export const Container = styled.div`
  width: 100%;
`;

const LoadingAnimation = keyframes`
  0%{
    filter: brightness(1);
  }
  50%{
    filter: brightness(0.9);
  }
  100%{
    filter: brightness(1);
  }
`;

export const Img = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;
  margin-bottom: 12px;
  background-color: ${color.lightGray};
  border-radius: 5px;
  animation: ${LoadingAnimation} 2s 0s infinite linear alternate;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Title = styled.div`
  width: 70%;
  height: 24px;
  background-color: ${color.lightGray};
  animation: ${LoadingAnimation} 2s 0s infinite linear alternate;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.div`
  animation: ${LoadingAnimation} 2s 0s infinite linear alternate;
  background-color: ${color.lightGray};
  width: 20%;
  height: 24px;
`;

export const Name = styled.div`
  animation: ${LoadingAnimation} 2s 0s infinite linear alternate;
  background-color: ${color.lightGray};
  width: 40%;
  height: 24px;
`;
