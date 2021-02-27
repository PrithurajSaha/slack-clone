import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";
import AddBoxIcon from "@material-ui/icons/AddBox";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const history = useHistory();

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  const goToChannel = (id) => {
    if (id) {
      console.log(id);
      history.push(`/room/${id}`);
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>Clever Programmer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelItem>
            <MainChannelIcon>{item.icon}</MainChannelIcon>
            {item.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <ChannelContainer>
            <ChannelIcon>
              <QuestionAnswerIcon />
            </ChannelIcon>
            Channels
          </ChannelContainer>
          <Add_Icon>
            <AddBoxIcon onClick={addChannel} />
          </Add_Icon>
        </NewChannelContainer>
        <ChannelsList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #222831;
  border-right: 1px solid #00adb5;
`;
const WorkspaceContainer = styled.div`
  color: #eeeeee;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border: 5px solid #393e46;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: #eeeeee;
  color: #00adb5;
  fill: #00adb5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  border: 1px solid #393e46;
  color: #eeeeee;
  display: grid;
  grid-template-columns: 15% auto;
  height: 36px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #393e46;
  }
`;
const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
  justify-content: space-between;
`;

const NewChannelContainer = styled.div`
  color: #eeeeee;
  border-top: 1px solid #393e46;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding-left: 19px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 5px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  border: 1px solid #393e46;
  color: #eeeeee;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #393e46;
  }
`;

const MainChannelIcon = styled.div`
  color: #00adb5;
`;
const ChannelContainer = styled.div`
  display: flex;
`;

const ChannelIcon = styled.div`
  color: #00adb5;
  margin-right: 10px;
`;
const Add_Icon = styled.div`
  color: #00adb5;
  :hover {
    cursor: pointer;
    color: #eeeeee;
  }
`;
