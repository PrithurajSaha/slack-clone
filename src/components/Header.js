import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <Icon>
          <AccessTimeIcon />
        </Icon>
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <Icon>
          <HelpOutlineIcon />
        </Icon>
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage>
          <img
            src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}
          />
        </UserImage>

        <Logout onClick={signOut}>
          <ExitToAppIcon />
        </Logout>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #222831;
  color: white;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #00adb5;
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
  color: #00adb5;
`;

const Icon = styled.div`
  :hover {
    color: #eeeeee;
    cursor: pointer;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  position: absolute;
  right: 0;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    color: white;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus {
    outline: none;
  }
`;

const Name = styled.div`
  font-size: 15px;
  padding-right: 10px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img {
    width: 100%;
  }
`;

const Logout = styled.div`
  margin-left: 5px;
  background: #00917c;
  border: 2px solid #eeeeee;
  border-radius: 2px;
  display: flex;
  justify-items: center;
  align-items: center;
  :hover {
    background: #00adb5;
    cursor: pointer;
  }
`;
