import styled from 'styled-components';

const ChatWindowContainer = styled.div`
  width: 60%;
  height: 300px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const ChatWindow = () => {
  return <ChatWindowContainer />;
};

export default ChatWindow;
