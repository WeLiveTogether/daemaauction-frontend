import * as S from "./styles";
import Google from "../Oauth/Google/Google";
import React from "react";

const Login = (): JSX.Element => {
  interface Button {
    component: () => JSX.Element;
  }

  const buttons: Button[] = [
    {
      component: Google,
    },
    // {
    // component:
    // }
  ];

  return (
    <S.Container>
      <S.GridContainer>
        <S.LoginContainer>
          {buttons.map((value, index) => {
            const { component } = value;
            const com = React.createElement(component, { key: index });
            return com;
          })}
        </S.LoginContainer>
      </S.GridContainer>
    </S.Container>
  );
};

export default Login;
