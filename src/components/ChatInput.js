import React from "react";
import styled from "styled-components";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import { useState } from "react";

function ChatInput({ sendMessage }) {
  const [input, SetInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input) return;
    sendMessage(input);
    SetInput("");
  };

  return (
    <Container>
      <InputContainer>
        <form>
          <input
            onChange={(e) => SetInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Message Here....."
          />
          <SendButton type="submit" onClick={send}>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-top: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 10px;
  color: #eeeeee;
`;
const InputContainer = styled.div`
  border: 2px solid #00adb5;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;
    input {
      background: transparent;
      color: #eeeeee;
      flex: 1;
      border: none;
      font-size: 15px;
    }
    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.button`
  :focus {
    outline: none;
  }
  border: none;
  background: #00917c;
  border-radius: 2px;
  margin-right: 5px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #00adb5;
  }
`;
const SendIcon = styled(SendRoundedIcon)`
  color: #eeeeee;
`;
