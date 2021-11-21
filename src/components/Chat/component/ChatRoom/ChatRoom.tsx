import State from "../../../../interfaces/State";
import * as S from "./styles";

type PropsType = {
  active: boolean;
  id: number;
  name: string;
  roomIdState: State<number | null>;
};

const ChatRoom = ({ active, roomIdState, id, name }: PropsType): JSX.Element => {
  const [roomId, setRoomId] = roomIdState;

  const onClickHandler = () => {
    setRoomId(id);
  };
  return (
    <>
      <S.Container active={active} onClick={onClickHandler}>
        <S.TitleContainer>
          <S.Name>{name}</S.Name>
          <span>·</span>
          <span>12분전</span>
        </S.TitleContainer>
        <S.Content>
          안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
        </S.Content>
      </S.Container>
    </>
  );
};

export default ChatRoom;
