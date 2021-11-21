import { useEffect, useLayoutEffect, useState } from "react";
import { Socket } from "socket.io-client";
import State from "../../../../interfaces/State";
import ChatRoom from "../ChatRoom/ChatRoom";
import * as S from "./styles";

interface PropsType {
  socket: Socket;
  roomIdState: State<number | null>;
  userId: string;
}

interface ChatRoomType {
  id: number;
  name: string;
}

const ChatRoomList = ({ socket, roomIdState, userId }: PropsType) => {
  const [roomId, setRoomId] = roomIdState;
  const [roomList, setRoomList] = useState<ChatRoomType[] | null>(null);

  useLayoutEffect(() => {
    socket.on("chatRoomList", (data: ChatRoomType[]) => {
      setRoomId(data[0].id);
      setRoomList(data);
      console.log(data);
    });

    socket.emit("chatRoomList", userId);
  }, []);

  return (
    <S.ChatRoomContainer>
      {roomList &&
        roomList.map((value, index) => {
          const { name, id } = value;
          return (
            <ChatRoom
              active={roomId === id}
              name={name}
              id={id}
              roomIdState={roomIdState}
              key={index}
            />
          );
        })}
    </S.ChatRoomContainer>
  );
};

export default ChatRoomList;
