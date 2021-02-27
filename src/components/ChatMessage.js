import React from "react";
import styled from "styled-components";

function ChatMessage({ image, name, timestamp, text }) {
  return (
    <Container>
      <UserAvatar>
        <img src={image} />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: transparent;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
  border: 2px solid #00adb5;
  border-radius: 5px;
  color: #eeeeee;
  padding: 8px 20px;
  :hover {
    background: #393e46;
  }
`;
const UserAvatar = styled.div`
  border: 2px solid #eeeeee;
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
