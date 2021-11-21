import MyChat from "../MyChat/MyChat";
import YourChat from "../YourChat/YourChat";
import * as S from "./styles";
import Send from "../../../../assets/icons/send.svg";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import State from "../../../../interfaces/State";
import { Socket } from "socket.io-client";

interface PropsType {
  socket: Socket;
  roomId: number;
  userId: string;
}

interface Msg {
  msg: string;
  senderId: string;
  senderName: string;
  time: string;
}

const Chatting = ({ socket, roomId, userId }: PropsType) => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [content, setContent] = useState<string>("");

  useLayoutEffect(() => {
    socket.emit("joinRoom", roomId);
  }, []);

  useLayoutEffect(() => {
    socket.on("msgToClient", (data: Msg) => {
      setMessages(messages.concat(data));
    });
  }, [messages]);

  const renderMessage = messages.map((value, index) => {
    const { msg, senderId } = value;

    const component = senderId === userId ? MyChat : YourChat;

    return React.createElement(component, { message: msg, key: index });
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onClickHandler = () => {
    if (content.length <= 0) {
      return;
    }
    socket.emit("msgToServer", { msg: content, userId: userId, roomId: roomId });
    setContent("");
  };

  return (
    <S.ChattingContiner>
      <S.ChatTitleContainer>
        <S.TitleContaienr>
          <S.Bold>김진근</S.Bold>
          <S.Description>·</S.Description>
          <S.Description>프로필 보기</S.Description>
        </S.TitleContaienr>
        <S.TitleLine />
      </S.ChatTitleContainer>
      <S.ChatContentContainer>{renderMessage}</S.ChatContentContainer>
      <S.ChatInputContainer>
        <S.InputContainer>
          <S.Input placeholder="내용을 입력해주세요." value={content} onChange={onChangeHandler} />
          <S.SendButton onClick={onClickHandler}>
            <img alt="send" src={Send} />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatInputContainer>
    </S.ChattingContiner>
  );
};

export default Chatting;
