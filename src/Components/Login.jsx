import React from "react";
import { Link } from "react-router-dom";
import { LoginContainer, LoginBtn, LoginState } from './Login.style'

export default function ComponentsLogin({ isLoggedIn, handleLogout }) {
  return (
    <LoginContainer>
      {isLoggedIn ? (
        <>
          <LoginBtn onClick={handleLogout}>로그아웃</LoginBtn>
          <LoginState>환영합니다!</LoginState>
        </>
      ) : (
        <>
          <Link to="/LoginPage">
            <LoginBtn>로그인</LoginBtn>
          </Link>
          <LoginState>로그인이 필요합니다.</LoginState>
        </>
      )}
    </LoginContainer>
  );
}