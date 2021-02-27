import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "../firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";

function Chat() {
  let { channelId } = useParams();
  const [channel, SetChannel] = useState();
  const [messages, SetMessages] = useState([]);

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        SetMessages(messages);
      });
  };
  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        SetChannel(snapshot.data());
      });
  };

  useEffect(() => {
    getMessages();
    getChannel();
  }, [channelId]);

  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName># {channel && channel.name}</ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>Details</div>
          <Info />
        </ChannelDetails>
      </Header>
      <MessageContainer>
        {messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))}
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  background-image: linear-gradient(#025955, #222831);
  display: grid;
  grid-template-rows: 74px auto min-content;
`;

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 5px solid #00917c;
  justify-content: space-between;
`;

const MessageContainer = styled.div``;

const Channel = styled.div``;

const ChannelName = styled.div`
  font-weight: 700;
  color: #00adb5;
`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #eeeeee;
  font-size: 13px;
  margin-top: 8px;
`;

const ChannelDetails = styled.div`
  color: #eeeeee;
  display: flex;
  align-items: center;
`;

const Info = styled(InfoIcon)`
  margin-left: 10px;
  cursor: pointer;
`;
