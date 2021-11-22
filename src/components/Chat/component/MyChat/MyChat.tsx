import * as S from "./styles";
type PropsType = {
  message: string;
};
const MyChat = ({ message }: PropsType): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ContentContainer>{message}</S.ContentContainer>
      </S.Container>
    </>
  );
};

export default MyChat;
