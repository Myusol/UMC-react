import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginpageContainer, InputBox, ConfirmBtn } from './Login.style'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false); // 기본적으로 false 값
  const [isPasswordValid, setIsPasswordValid] = useState(false); // 기본적으로 false 값

  const saveUserEmail = event => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsEmailValid(emailCondition.test(emailValue)); // 실시간 유효성 검사
  };

  const saveUserPassword = event => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(pwCondition.test(passwordValue)); // 실시간 유효성 검사
  };

  const handleClick = () => {
    setIsEmailValid(!emailCondition.test(email));
    setIsPasswordValid(!pwCondition.test(password));

    if (emailCondition.test(email) && pwCondition.test(password)) {
      console.log("유효한 이메일과 비밀번호입니다.");
    } else {
      console.log("이메일 또는 비밀번호가 유효하지 않습니다.");
    }
  };

  const emailCondition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const pwCondition = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  return (
    <LoginpageContainer>
      <h2>
        이메일과 비밀번호를<br/>
        입력해주세요
      </h2>

      <InputBox>
        <label htmlFor="email">이메일 주소</label>
        <input type="email" id="email" placeholder="이메일" value={email} onChange={saveUserEmail} />
        {!isEmailValid && email && <span>올바른 이메일을 입력해주세요.</span>}
      </InputBox>

      <InputBox>
        <label htmlFor="pwd">비밀번호</label>
        <input type="password" id="pwd" placeholder="영문, 숫자, 특수문자 포함 8자 이상" value={password} onChange={saveUserPassword} />
        {!isPasswordValid && password && <span>올바른 비밀번호를 입력해주세요.</span>}
      </InputBox>

      <Link to="/">
        <ConfirmBtn onClick={handleClick} disabled={!(isEmailValid && isPasswordValid)}>
          확인
        </ConfirmBtn>
      </Link>
    </LoginpageContainer>
  );
}

