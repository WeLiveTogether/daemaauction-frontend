export default interface refreshTokenResponse {
  header: {
    code: number;
    message: string;
  };
  body: {
    access_token: string;
  };
}
