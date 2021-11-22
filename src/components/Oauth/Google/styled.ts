import styled from "@emotion/styled";
import { color } from "../../../styles/color";
import { font } from "../../../styles/font";

export const GoogleLogin = styled.a`
  padding: 8px 0px;
  text-align: center;
  background-color: ${color.green};
  font: ${font.subtitle};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  span{
    
    color: ${color.white};
    text-decoration:none;
  }
`;