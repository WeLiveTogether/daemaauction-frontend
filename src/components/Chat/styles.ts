import styled from "@emotion/styled";
import { color } from "../../styles/color";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  top: 0;
  left: 0;
  display: flex;
  background-color: #f7fbfe;
  max-height: calc(100% - 64px);
`;

export const Line = styled.div`
  width: 1px;
  background-color: #8395a7;
  width: 1px;
  height: 100%;
`;

export const ChatContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 0px 16px 16px 16px;
  box-sizing: border-box;
`;
