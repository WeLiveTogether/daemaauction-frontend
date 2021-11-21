import styled from "@emotion/styled";

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
  font-size: 16px;
  font-weight: bold;
`;
export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const ChatContentContainer = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  row-gap: 12px;
  justify-content: flex-end;
  padding: 16px 16px 24px 16px;
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
  font-size: 16px;
  font-weight: 300;
  background-color: #f7fbfe;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 8px 16px 8px 16px;
  ::placeholder {
    color: #8395a7;
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
