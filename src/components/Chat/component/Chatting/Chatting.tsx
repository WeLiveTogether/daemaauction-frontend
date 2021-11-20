import MyChat from "../MyChat/MyChat";
import YourChat from "../YourChat/YourChat";
import * as S from "./styles";
import Send from "../../../../assets/icons/send.svg";
import { useEffect, useLayoutEffect, useRef } from "react";
import socketio, { Socket } from "socket.io-client";
import State from "../../../../interfaces/State";

interface PropsType {
  socket: Socket;
}

const Chatting = ({ socket }: PropsType) => {
  useLayoutEffect(() => {
    socket.emit("joinRoom", socket, 5);

    socket.on("chatRoomList", (data) => {
      console.log(data);
    });

    console.log("ASD");
  }, []);

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
      <S.ChatContentContainer>
        <S.ChatBundle>
          <YourChat message="모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가" />
          <YourChat message="모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다." />
        </S.ChatBundle>
        <S.ChatBundle>
          <MyChat message="모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가" />
          <MyChat message="모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다." />
        </S.ChatBundle>
      </S.ChatContentContainer>
      <S.ChatInputContainer>
        <S.InputContainer>
          <S.Input placeholder="내용을 입력해주세요." />
          <S.SendButton
            onClick={() => {
              socket.emit("msgToServer", socket, { msg: "hello", userId: 5, roomId: 5 });
            }}
          >
            <img alt="send" src={Send} />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatInputContainer>
    </S.ChattingContiner>
  );
};

export default Chatting;
