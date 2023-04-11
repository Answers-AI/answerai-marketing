import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const LeftColumn = styled.div`
  width: 45%;
`;

const RightColumn = styled.div`
  width: 45%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4682b4;
  color: #fff;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #366d9c;
  }
`;

const Contact = () => {
  return (
    <Container>
      <LeftColumn>
        <h2>Contact Us</h2>
        <p>Please fill out the form below to get in touch with us.</p>
      </LeftColumn>
      <RightColumn>
        <Form>
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <TextArea name="message" placeholder="Message"></TextArea>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </RightColumn>
    </Container>
  );
};

export default Contact;
