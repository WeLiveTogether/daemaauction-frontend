import * as S from "./styles";
import { useLayoutEffect, useState } from "react";
import ChatRoomList from "./component/ChatRoomList/ChatRoomList";
import Chatting from "./component/Chatting/Chatting";
import { io, Socket } from "socket.io-client";
import { getMyInfo } from "../../utils/api/My";
import ChatRoomSkeleton from "./component/ChatRoomList/ChatRoomSkeleton/ChatRoomSkeleton";
import ChattingSkeleton from "./component/Chatting/ChattingSkeleton/ChattingSkeleton";

const Chat = (): JSX.Element => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("");

  const setMyInfo = async () => {
    try {
      const data = await getMyInfo();

      setUserId(data.data.body.user.userId);
      setUserName(data.data.body.user.username);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    setMyInfo();
    const socket = io("https://dhrtuseoak.herokuapp.com", {
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
                <Chatting socket={socket} roomId={roomId} userId={userId} userName={userName} />
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
