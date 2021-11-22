export interface User {
  createdDate: string;
  email: string;
  joinRooms: [];
  modifiedDate: null | string;
  products: [];
  profileImageUrl: string;
  providerType: string;
  roleType: string;
  userId: string;
  username: string;
}

export default interface myInfoResponse {
  body: {
    user: User;
  };
  header: {
    code: number;
    message: string;
  };
}
