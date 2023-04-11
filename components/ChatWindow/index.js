import React from "react";
import styled from "styled-components";

const ChatWindowContainer = styled.div`
  width: 100%;
  height: 80vh;
  text-align: left;
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  color: #fff;
  overflow-y: auto;
  padding: 10px;
`;

const Message = styled.p`
  color: #fff; // Set the text color to white
  // Add any other styles you need for the message, e.g., margin or padding
`;

const ChatWindow = ({ messages, loading, handleClearChat }) => {
  return (
    <ChatWindowContainer>
      {messages.map((message, index) => (
        <Message key={index}>
          {message.role}: {message.content}
        </Message>
      ))}
      {loading && <Message>Loading...</Message>}
    </ChatWindowContainer>
  );
};

export default ChatWindow;
