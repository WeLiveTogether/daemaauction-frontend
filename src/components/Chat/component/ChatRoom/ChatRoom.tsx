import * as S from "./styles";

type PropsType = {
  active: boolean;
};

const ChatRoom = ({ active }: PropsType): JSX.Element => {
  return (
    <>
      <S.Container active={active}>
        <S.TitleContainer>
          <S.Name>김진근</S.Name>
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
