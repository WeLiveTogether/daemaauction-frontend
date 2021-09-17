import * as S from './styles'

const Login = ():JSX.Element => {
  return (
    <S.Container>
      <S.GridContainer>
        <S.LoginContainer>
          <S.Title>로그인</S.Title>
          <S.GuideText>아이디</S.GuideText>
          <S.InputID />
          <S.GuideText>비밀번호</S.GuideText>
          <S.InputPassword type="password"/>
          <S.LoginButton>로그인</S.LoginButton>
          <S.Semicolone>with Semicolone;</S.Semicolone>
        </S.LoginContainer>
      </S.GridContainer>
    </S.Container>
  );
}

export default Login;