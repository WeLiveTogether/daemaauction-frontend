import styled from "@emotion/styled";
import { color } from "../../../styles/color";
import { font } from "../../../styles/font";

export const GoogleLogin = styled.button`
  padding: 8px 0px;
  text-align: center;
  background-color: ${color.gray};
  font: ${font.subtitle};
  color: ${color.white};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;