import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 1110px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 30px;
`;

export const GridContainer = styled.div`
  grid-column: 13;
  display: flex;
  justify-items: end;
  align-items: center;
`;
export const LoginButton = styled.button`
  width: 172px;
  height: 172px;
  text-align: center;
  background-color: ${color.green};
  color: ${color.white};
  font: ${font.subtitle};
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
`;
