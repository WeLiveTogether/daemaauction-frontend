import * as S from "./styles";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import ChatRoomList from "./component/ChatRoomList/ChatRoomList";
import Chatting from "./component/Chatting/Chatting";
import { io, Socket } from "socket.io-client";
import { getMyInfo } from "../../utils/api/My";
import { User } from "../../models/dto/response/myInfoResponse";
import ChatRoomSkeleton from "./component/ChatRoomList/ChatRoomSkeleton/ChatRoomSkeleton";
import ChattingSkeleton from "./component/Chatting/ChattingSkeleton/ChattingSkeleton";

interface MsgRes {
  msg: "string";
  roomId: number;
  userId: number;
}

const Chat = (): JSX.Element => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const [userId, setUserId] = useState<string | null>(null);

  const setMyInfo = async () => {
    try {
      const data = await getMyInfo();
      console.log(data);

      setUserId(data.data.body.user.userId);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    setMyInfo();
    const socket = io("http://192.168.137.198:3000", {
      transports: ["websocket"],
    });

    setSocket(socket);
  }, []);

  const [roomId, setRoomId] = useState<string | null>(null);

  return (
    <>
      <S.Container>
        {socket && (
          <>
            {userId ? (
              <ChatRoomList socket={socket} roomIdState={[roomId, setRoomId]} userId={userId} />
            ) : (
              <ChatRoomSkeleton />
            )}
            <S.Line />
            <S.ChatContainer>
              {roomId && userId ? (
                <Chatting socket={socket} roomId={roomId} userId={userId} />
              ) : (
                <ChattingSkeleton />
              )}
            </S.ChatContainer>
          </>
        )}
      </S.Container>
    </>
  );
};

export default Chat;
