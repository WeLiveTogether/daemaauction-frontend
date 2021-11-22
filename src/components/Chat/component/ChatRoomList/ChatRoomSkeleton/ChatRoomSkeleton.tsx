import * as I from "../styles";
import * as S from "./styles";
const ChatRoomSkeleton = (): JSX.Element => {
  return (
    <I.ChatRoomContainer>
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <S.Container key={index}>
            <S.Gray1 />
            <S.Gray2 />
          </S.Container>
        );
      })}
    </I.ChatRoomContainer>
  );
};

export default ChatRoomSkeleton;
