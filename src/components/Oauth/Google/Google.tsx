import * as S from "./styled";

const Google = () => {
  const { host, protocol } = window.location;
  const login = `https://daemaauction.herokuapp.com/oauth2/authorization/google?redirect_uri=${protocol}//${host}/login/success`;

  return (
    <>
      <S.GoogleLogin href={login}>
        <span>구글 로그인</span>
      </S.GoogleLogin>
    </>
  );
};

export default Google;
