import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";

const StyledRegister = styled.div`
  color: #2d2d2d;
`;

const registerPage = () => {
  return (
    <StyledRegister>
      <RegisterForm />
    </StyledRegister>
  );
};

export default registerPage;
