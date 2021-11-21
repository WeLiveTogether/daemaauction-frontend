export default interface ChatRoomType {
  id: string;
  room: {
    id: string;
    msgCnt: number;
    roomId: string;
  };
  user: {
    createdDate: string;
    email: string;
    password: string;
    profileImageUrl: string;
    providerType: string;
    roleType: string;
    userId: string;
    userSeq: string;
    username: string;
  };
  userId: string;
}
