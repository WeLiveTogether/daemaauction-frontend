import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const ItemNone = styled.div`
  width: 100%;
  aspect-ratio: 3 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${font.subtitle};
  color: ${color.black};
  background-color: ${color.lightGray};
  border-radius: 5px;
`;
