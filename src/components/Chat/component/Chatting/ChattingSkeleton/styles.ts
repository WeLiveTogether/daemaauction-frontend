import styled from "@emotion/styled";
import { color } from "../../../../../styles/color";
import { font } from "../../../../../styles/font";

export const Title = styled.div`
  width: 20%;
  height: 24px;
  background-color: ${color.lightGray};
  border-radius: 5px;
`;

export const Input = styled.div`
  outline: none;
  border: 0;
  font: ${font.body3};
  background-color: #f7fbfe;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 8px 16px 8px 16px;
  color: ${color.gray};
`;

export const MyChatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const MyChatContentContainer = styled.div`
  max-width: 60%;
  padding: 8px;
  border-radius: 5px;
  background-color: ${color.lightGray};
`;

export const ChatContent1 = styled.div`
  width: 100px;
  height: 24px;
  border-radius: 5px;
`;

export const ChatContent2 = styled.div`
  width: 400px;
  height: 24px;
  border-radius: 5px;
`;

export const YourChatContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;

export const YourChatContentContainer = styled.div`
  max-width: 60%;
  padding: 8px;
  background-color: ${color.lightGray};
  border-radius: 5px;
`;
