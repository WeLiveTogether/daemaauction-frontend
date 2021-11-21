import { useLayoutEffect, useState } from "react";
import ChatRoomType from "../../../../interfaces/ChatRoomType";
import State from "../../../../interfaces/State";
import { getProductDetail } from "../../../../utils/api/ProductDetail";
import * as S from "./styles";

type PropsType = {
  active: boolean;
  data: ChatRoomType;
  roomIdState: State<string | null>;
};

const ChatRoom = ({ active, roomIdState, data }: PropsType): JSX.Element => {
  const [roomId, setRoomId] = roomIdState;
  const [productName, setProductName] = useState<string>("");
  const { username } = data.user;
  const { id } = data;
  const onClickHandler = () => {
    setRoomId(id);
  };

  const getProductName = async () => {
    try {
      const response = await getProductDetail(Number(id));
      setProductName(response.data[0].title);
    } catch (error) {}
  };

  useLayoutEffect(() => {
    getProductName();
  }, []);

  return (
    <>
      <S.Container active={active} onClick={onClickHandler}>
        <S.TitleContainer>
          <S.Name>{username}</S.Name>
        </S.TitleContainer>
        <S.Content>{productName}</S.Content>
      </S.Container>
    </>
  );
};

export default ChatRoom;
