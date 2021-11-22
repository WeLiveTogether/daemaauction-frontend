import * as S from "./styles";
type PropsType = {
  message: string;
};
const YourChat = ({ message }: PropsType): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.ContentContainer>{message}</S.ContentContainer>
      </S.Container>
    </>
  );
};

export default YourChat;
