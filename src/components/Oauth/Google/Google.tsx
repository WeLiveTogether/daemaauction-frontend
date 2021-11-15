import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const Google = () => {
  const { host, protocol } = window.location;
  const login = `https://daemaauction.herokuapp.com/oauth2/authorization/google?redirect_uri=${protocol}//${host}/login/success`;
  console.log(login);
  
  return (
    <S.GoogleLogin>
      <a href={login}>구글 로그인</a>
    </S.GoogleLogin>
  );
};

export default Google;
