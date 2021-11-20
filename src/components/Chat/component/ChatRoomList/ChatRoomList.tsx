import { useEffect, useLayoutEffect } from "react";
import { Socket } from "socket.io-client";
import State from "../../../../interfaces/State";
import ChatRoom from "../ChatRoom/ChatRoom";
import * as S from "./styles";

interface PropsType {
  socket: Socket;
  roomIdState: State<number | null>;
}

const ChatRoomList = ({ socket, roomIdState }: PropsType) => {
  const [roomId, setRoomId] = roomIdState;

  useLayoutEffect(() => {
    socket.on("chatRoomList", (data) => {
      console.log(data);
    });

    socket.emit("")
  }, []);

  return (
    <S.ChatRoomContainer>
      <ChatRoom active={true} />
      <ChatRoom active={false} />
      <ChatRoom active={false} />
      <ChatRoom active={false} />
      <ChatRoom active={false} />
      <ChatRoom active={false} />
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
