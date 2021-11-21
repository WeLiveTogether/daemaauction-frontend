import { useEffect, useLayoutEffect, useState } from "react";
import { Socket } from "socket.io-client";
import ChatRoomType from "../../../../interfaces/ChatRoomType";
import State from "../../../../interfaces/State";
import ChatRoom from "../ChatRoom/ChatRoom";
import * as S from "./styles";

interface PropsType {
  socket: Socket;
  roomIdState: State<string | null>;
  userId: string;
}

const ChatRoomList = ({ socket, roomIdState, userId }: PropsType) => {
  const [roomId, setRoomId] = roomIdState;
  const [roomList, setRoomList] = useState<ChatRoomType[] | null>(null);

  useLayoutEffect(() => {
    socket.on("chatRoomList", (data: ChatRoomType[]) => {
      console.log(data);
      setRoomList(data);
      if (data.length > 0) {
        setRoomId(data[0].id);
      }
    });

    socket.emit("chatRoomList", userId);
  }, []);

  return (
    <S.ChatRoomContainer>
      {roomList &&
        roomList.map((value, index) => {
          const { id } = value;
          return (
            <ChatRoom active={roomId === id} data={value} roomIdState={roomIdState} key={index} />
          );
        })}
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
