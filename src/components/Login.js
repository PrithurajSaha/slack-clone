import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login(props) {
  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        props.SetUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://cdn.freebiesupply.com/logos/large/2x/slack-icon.svg" />
        <h1>Sign in Slack-Clone</h1>
        <SignInButton onClick={() => SignIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #222831;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  h1 {
    color: #eeeeee;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 5px;
  border: 3px solid #393e46;
  box-shadow: 3px 3px 5px 0px rgba(0, 173, 181, 0.76);
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 25px;
  border-radius: 8px;
  color: #eeeeee;
  background-color: #00adb5;
  border: 3px solid #eeeeee;
  height: 40px;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #00917c;
    cursor: pointer;
  }
`;
