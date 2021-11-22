import styled from "@emotion/styled";
import { color } from "../../../../styles/color";
import { font } from "../../../../styles/font";

export const ChattingContiner = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ChatTitleContainer = styled.div`
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 16px 0px 16px;
`;

export const TitleLine = styled.div`
  height: 1px;
  width: 100%;
  box-sizing: border-box;
  background-color: #8395a7;
  margin-top: 12px;
`;

export const TitleContaienr = styled.div`
  display: flex;
  align-items: center;
  color: #576574;
  column-gap: 2px;
`;

export const Bold = styled.div`
  font: ${font.body1};
`;
export const Description = styled.div`
  font: ${font.description};
`;

export const ChatContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  margin: 16px 0px 24px 0px;
  padding: 0px 16px 0px 16px;
`;

export const ChatContentContainerInner = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 12px;
`;

export const ChatMargin = styled.div`
  width: 100%;
  padding-top: 12px;
`;

export const ChatInputContainer = styled.div`
  height: 56px;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 16px 16px 16px;
  box-sizing: border-box;
`;

export const Input = styled.input`
  outline: none;
  border: 0;
  font: ${font.body3};
  background-color: #f7fbfe;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 8px 16px 8px 16px;
  ::placeholder {
    color: ${color.gray};
  }
`;

export const InputContainer = styled.div`
  border-radius: 100px;
  background-color: #f7fbfe;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const SendButton = styled.div`
  margin: 2px;
  border-radius: 50%;
  background-color: #1cd0a1;
  width: 32px !important;
  height: 32px;
  box-sizing: content-box;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;
