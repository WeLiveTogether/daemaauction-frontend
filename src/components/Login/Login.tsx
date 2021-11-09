import { color } from "../../styles/color";
import * as S from "./styles";

const Login = (): JSX.Element => {
  interface Button {
    text: string;
    color: string;
    // onclick: () => void;
  }

  const buttons: Button[] = [
    {
      text: "네이버 로그인",
      color: color.green,
      // onclick: naver(),
    },
    {
      text: "카카오 로그인",
      color: color.yellow,
      // onclick: kakao(),
    },
    {
      text: "페이스북 로그인",
      color: color.blue,
      // onclick: facebook(),
    },
    {
      text: "구글 로그인",
      color: color.gray,
      // onclick: google(),
    },
  ];

  return (
    <S.Container>
      <S.GridContainer>
        <S.LoginContainer>
          {buttons.map((value) => {
            const { color, text } = value;
            return <S.LoginButton color={color}>{text}</S.LoginButton>;
          })}
        </S.LoginContainer>
      </S.GridContainer>
    </S.Container>
  );
};

export default Login;
