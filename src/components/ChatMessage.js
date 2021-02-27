import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/9.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Prithuraj Saha
          <span>2/23/2021 11:13:56 Am</span>
        </Name>
        <Text>This is the best Challenge!</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #222831;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid #00adb5;
  border-radius: 5px;
  color: #eeeeee;
  padding: 8px 20px;
  :hover {
    background: #393e46;
  }
`;
const UserAvatar = styled.div`
  margin-right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

const Name = styled.span`
  font-weight: 900;
  line-height: 1.4;
  font-size: 15px;
  span {
    font-size: 13px;
    margin-left: 8px;
    font-weight: 400;
    color: #00adb5;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.span``;
