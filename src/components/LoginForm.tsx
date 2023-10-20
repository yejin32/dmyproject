import React from "react";
import styled from "styled-components";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import kakao_img from "../assets/kakao_img.svg";
import google_img from "../assets/google_img.svg";
import { Link } from "react-router-dom";

const SLoginForm = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 550px;
  height: 670px;
  border-radius: 6px;
  background-color: #f4f9f4;
  transform: translate(-50%, -50%);

  .login_header {
    font-size: 33px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin: 13% 0;
  }

  .register_btn {
    display: flex;
    justify-content: center;
    margin: 40px 0;

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
  width: 402px;
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

const SOauthForm = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 400px;
  color: #474747;

  button {
    width: 166px;
    align-items: center;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .kakao_img {
      padding-right: 10px;
    }
  }

  .kakao {
    padding: 11px 9px;
    background-color: #f9e000;
  }
  .google {
    gap: 14px;
    padding: 12px 15px;
    background-color: #fff;
  }
`;

const LoginForm = () => {
  return (
    <SLoginForm>
      <p className="login_header">로그인</p>
      <SInputForm>
        <AlternateEmailIcon className="icon" />
        <input placeholder="이메일" type="email" />
      </SInputForm>
      <SInputForm>
        <LockIcon className="icon" />
        <input placeholder="비밀번호" type="password" />
      </SInputForm>
      <SSubmitButton>로그인</SSubmitButton>
      <SOauthForm>
        <button className="kakao">
          <img src={kakao_img} className="kakao_img" />
          카카오 로그인
        </button>
        <button className="google">
          <img src={google_img} className="google_img" />
          구글 로그인
        </button>
      </SOauthForm>
      <p className="register_btn">
        <Link to="/register" className="link_btn">
          회원가입
        </Link>
      </p>
    </SLoginForm>
  );
};

export default LoginForm;
