import styled from "@emotion/styled";
import { color } from "../../../../styles/color";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const ContentContainer = styled.div`
  max-width: 60%;
  padding: 8px;
  word-wrap: break-word;
  word-break: break-all;
  border-radius: 5px;
  background-color: ${color.green};
  color: ${color.white};
`;
