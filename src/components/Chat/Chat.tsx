import * as S from "./styles";
import { useEffect, useState } from "react";
import ChatRoomList from "./component/ChatRoomList/ChatRoomList";
import Chatting from "./component/Chatting/Chatting";
import socketio, { Socket } from "socket.io-client";

interface MsgRes {
  msg: "string";
  roomId: number;
  userId: number;
}

const Chat = (): JSX.Element => {
  const [socket, setSocket] = useState<Socket>(
    socketio("https://dhrtuseoak.herokuapp.com", {
      transports: ["websocket"],
      upgrade: false,
      forceNew: true,
    })
  );
  const [roomId, setRoomId] = useState<number | null>(null);

  return (
    <>
      <S.Container>
        <ChatRoomList socket={socket} roomIdState={[roomId, setRoomId]} />
        <S.Line />
        <S.ChatContainer>
          <Chatting socket={socket} />
        </S.ChatContainer>
      </S.Container>
    </>
  );
};

export default Chat;
