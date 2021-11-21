import * as I from "../styles";
import * as S from "./styles";
import Send from "../../../../../assets/icons/send.svg";

const ChattingSkeleton = (): JSX.Element => {
  return (
    <I.ChattingContiner>
      <I.ChatTitleContainer>
        <I.TitleContaienr>
          <S.Title />
        </I.TitleContaienr>
        <I.TitleLine />
      </I.ChatTitleContainer>
      <I.ChatContentContainer>
        <S.MyChatContainer>
          <S.MyChatContentContainer>
            <S.ChatContent1 />
          </S.MyChatContentContainer>
        </S.MyChatContainer>
        <S.MyChatContainer>
          <S.MyChatContentContainer>
            <S.ChatContent2 />
          </S.MyChatContentContainer>
        </S.MyChatContainer>
        <S.YourChatContainer>
          <S.YourChatContentContainer>
            <S.ChatContent1 />
          </S.YourChatContentContainer>
        </S.YourChatContainer>
        <S.YourChatContainer>
          <S.YourChatContentContainer>
            <S.ChatContent2 />
          </S.YourChatContentContainer>
        </S.YourChatContainer>
      </I.ChatContentContainer>
      <I.ChatInputContainer>
        <I.InputContainer>
          <S.Input>내용을 입력해주세요.</S.Input>
          <I.SendButton>
            <img alt="send" src={Send} />
          </I.SendButton>
        </I.InputContainer>
      </I.ChatInputContainer>
    </I.ChattingContiner>
  );
};

export default ChattingSkeleton;
