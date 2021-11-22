import { useEffect, useLayoutEffect, useState } from "react";
import { Socket } from "socket.io-client";
import ChatRoomType from "../../../../interfaces/ChatRoomType";
import State from "../../../../interfaces/State";
import ChatRoom from "../ChatRoom/ChatRoom";
import ChatRoomSkeleton from "./ChatRoomSkeleton/ChatRoomSkeleton";
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
      setRoomList(data);
      console.log(data);

      if (data.length > 0) {
        setRoomId(data[0].room.id);
      }
    });

    socket.emit("chatRoomList", userId);
  }, []);

  const renderChatRoom = () => {
    if (!roomList) {
      return;
    }

    if (roomList.length <= 0) {
      return (
        <>
          <S.ChatRoomNone>채팅방이 없습니다.</S.ChatRoomNone>
        </>
      );
    }

    return roomList.map((value, index) => {
      return (
        <ChatRoom
          active={roomId === value.room.id}
          data={value}
          roomIdState={roomIdState}
          key={`${index}${roomId}`}
        />
      );
    });
  };

  return (
    <>
      {roomList ? (
        <S.ChatRoomContainer>{roomList && renderChatRoom()}</S.ChatRoomContainer>
      ) : (
        <ChatRoomSkeleton />
      )}
    </>
  );
};

export default ChatRoomList;
