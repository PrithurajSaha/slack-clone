import styled from "styled-components";
import React from "react";

function SelectChannel() {
  return <Container>Select a channel or create one </Container>;
}

export default SelectChannel;

const Container = styled.div`
  color: #eeeeee;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
