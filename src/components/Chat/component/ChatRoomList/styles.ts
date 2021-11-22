import styled from "@emotion/styled";
import { color } from "../../../../styles/color";
import { font } from "../../../../styles/font";

export const ChatRoomContainer = styled.div`
  width: 20%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  overflow: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 0px 16px 16px 16px;
`;

export const ChatRoomNone = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${font.subtitle};
  color: ${color.black};
  background-color: ${color.white};
  padding: 8px 0px;
  border-radius: 5px;
`;
