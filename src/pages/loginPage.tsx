import React from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const SLoginPage = styled.div`
  color: #2d2d2d;
`;

const loginPage = () => {
  return (
    <SLoginPage>
      <LoginForm />
    </SLoginPage>
  );
};

export default loginPage;
