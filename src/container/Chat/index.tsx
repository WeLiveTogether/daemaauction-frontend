import styled from "@emotion/styled";
import Chat from "../../components/Chat/Chat";
import Header from "../../components/Header/Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChatContainer = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Chat />
    </Container>
  );
};

export default ChatContainer;
