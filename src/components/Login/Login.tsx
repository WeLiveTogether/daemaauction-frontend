import * as S from './styles'

const Login = ():JSX.Element => {
  return (
    <S.Container>
      <S.GridContainer>
        <S.LoginContainer>
          <S.LoginButton>구글로 로그인</S.LoginButton>
        </S.LoginContainer>
      </S.GridContainer>
    </S.Container>
  );
}

export default Login;
