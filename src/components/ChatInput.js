import React from "react";
import styled from "styled-components";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message Here....." />
          <SendButton>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
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

const SendButton = styled.div`
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
