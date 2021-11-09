import styled from "@emotion/styled";

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

export const LoginContainer = styled.div`
  width: 100%;
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
  background-color: #1cd0a1;
  color: white;
  border: none;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
`;
