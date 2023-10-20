import React from "react";
import styled from "styled-components";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const SRegisterForm = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 550px;
  height: 670px;
  border-radius: 6px;
  background-color: #f4f9f4;
  transform: translate(-50%, -50%);

  .register_header {
    font-size: 33px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin: 11% 0;
  }
  .login_btn {
    display: flex;
    justify-content: center;

    .link_btn {
      text-decoration: none;
      color: #616161;
      font-size: 16px;
    }
  }
`;

const SInputForm = styled.div`
  width: 402px;
  height: 50px;
  margin: auto;
  margin-bottom: 40px;
  color: #616161;
  display: flex;
  align-items: center;

  .icon {
    position: fixed;
    padding-left: 10px;
  }

  .email_form {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      height: 45px;
      margin-left: 20px;
      place-content: center;
      border: none;
      border-radius: 3px;
      color: #ffffff;
      background-color: #8aae92;
    }
  }

  .email_input {
    width: 233px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 0 45px;
    margin: 0;
  }

  input {
    width: 402px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    margin: auto;
    display: flex;
    align-items: center;
    font-size: 15px;
    padding: 0 45px;
  }
`;

const SSubmitButton = styled.button`
  width: 408px;
  place-content: center;
  padding: 11px 169px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  background-color: #8aae92;
  display: flex;
  margin: auto;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 600;
`;

const RegisterForm = () => {
  return (
    <SRegisterForm>
      <p className="register_header">회원가입</p>
      <SInputForm>
        <AlternateEmailIcon className="icon" />
        <div className="email_form">
          <input className="email_input" placeholder="이메일" type="email" />
          <button>인증요청</button>
        </div>
      </SInputForm>
      <SInputForm>
        <VerifiedUserIcon className="icon" />
        <input placeholder="인증번호" />
      </SInputForm>
      <SInputForm>
        <LockIcon className="icon" />
        <input placeholder="비밀번호" type="password" />
      </SInputForm>
      <SInputForm>
        <LockIcon className="icon" />
        <input placeholder="비밀번호 확인" type="password" />
      </SInputForm>
      <SSubmitButton>회원가입</SSubmitButton>
      <p className="login_btn">
        <Link to="/login" className="link_btn">
          로그인
        </Link>
      </p>
    </SRegisterForm>
  );
};

export default RegisterForm;
