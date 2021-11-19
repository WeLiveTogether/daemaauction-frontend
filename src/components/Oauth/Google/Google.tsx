import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const Google = () => {
  const { host, protocol } = window.location;
  const id = process.env.REACT_APP_GOOGLE_API_KEY;

  const login = `https://daemaauction.herokuapp.com/oauth2/authorization/google?client_id=${id}&redirect_uri=${protocol}//${host}/login/oauth2/code/google`;

  return (
    <S.GoogleLogin>
      <a href={login}>구글 로그인</a>
    </S.GoogleLogin>
  );
};

export default Google;
