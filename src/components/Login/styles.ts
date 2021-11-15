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
  grid-column: 9/13;
  display: flex;
  justify-items: end;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
