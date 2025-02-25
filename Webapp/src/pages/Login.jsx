import React, { useState } from "react";
import styled from "styled-components";
import { BigButton, GhostBigButton } from "../components/BigButton";
import { useLogin } from "../Hooks/useLogin";
import { useRegister } from "../Hooks/useRegister";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [signIn, toggle] = useState(true);
  const { error, signup } = useRegister();
  const { error: loginError, signin } = useLogin();
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!registerName || !registerEmail || !registerPassword) {
      setFormError("All fields are required for registration.");
      return;
    }
    setFormError("");
    await signup(registerName, registerEmail, registerPassword);
    navigate("/profile");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setFormError("Both email and password are required for login.");
      return;
    }
    setFormError("");
    await signin(loginEmail, loginPassword);
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <SignUpContainer signinin={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setRegisterName(e.target.value)}
              value={registerName}
            />
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
              value={registerEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
              value={registerPassword}
            />
            {formError && <p>{formError}</p>}
            {error && <p>{error}</p>}
            <BigButton type="submit" onClick={handleRegister}>
              Sign Up
            </BigButton>
          </Form>
        </SignUpContainer>
        <SignInContainer signinin={signIn}>
          <Form>
            <Title>Sign in</Title>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
            />
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
            />
            {formError && <p>{formError}</p>}
            {loginError && <p>{loginError}</p>}
            <BigButton type="submit" onClick={handleLogin}>
              Sign In
            </BigButton>
          </Form>
        </SignInContainer>
        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph style={{ color: "#faedcd" }}>
                Please login with your info
              </Paragraph>
              <GhostBigButton onClick={() => toggle(true)}>
                Sign In
              </GhostBigButton>
            </LeftOverlayPanel>
            <RightOverlayPanel signinIn={signIn}>
              <SignUpTitle>Don't have an account?</SignUpTitle>
              <Paragraph style={{ color: "#faedcd" }}>
                Enter your personal details <br />
                and start the journey with us!
              </Paragraph>
              <GhostBigButton onClick={() => toggle(false)}>
                Sign Up
              </GhostBigButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Full viewport height */
  background-color: transparent;
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 678px;
  max-width: 100%;
  min-height: 400px;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinin !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinin !== true ? `transform: translateX(100%);` : null}
`;

const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  font-family: "Varela Round", sans-serif;
  margin: 0;
`;

const SignUpTitle = styled(Title)`
  font-weight: bold;
  color: #faedcd;
  font-size: 26px;
  font-family: "Varela Round", sans-serif;
  margin: 0;
`;

const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

const Overlay = styled.div`
  background: #8a5d3d;
  background: -webkit-linear-gradient(to right, #8a5d3d, #d4a373);
  background: linear-gradient(to right, #8a5d3d, #d4a373);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;
  ${Title} {
    color: #faedcd;
  }
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
  justify-content: center;
  align-items: flex-end;
  padding-right: 40px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-family: "Varela Round", sans-serif;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  padding-right: 40px;
`;

export default Login;
