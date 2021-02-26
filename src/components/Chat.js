import React from "react";
import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";

function Chat() {
  return (
    <RoomContainer>
      <ChatHeader>
        <Room>
          <b># clever</b>
          <RoomDescription>
            <p>The Clever Programmer slack</p>
          </RoomDescription>
        </Room>
        <Info>
          <InfoIcon />
        </Info>
      </ChatHeader>
    </RoomContainer>
  );
}

export default Chat;

const ChatHeader = styled.div`
  height: 65px;
  border-bottom: 1px solid #00adb5;
  display: flex;
  justify-content: space-between;
`;
const Room = styled.div`
  padding-top: 7px;
  padding-left: 7px;
  color: #eeeeee;
`;

const RoomDescription = styled.div`
  color: #eeeeee;
  font-size: 15px;
`;

const Info = styled.div`
  cursor: pointer;
  color: #222831;
  padding: 10px;
  height: 15px;
  :hover {
    color: #eeeeee;
  }
`;
const RoomContainer = styled.div`
  background: #00917c;
  border: 8px groove #00adb5;
`;
