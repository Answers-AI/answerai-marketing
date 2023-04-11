import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import styled, { keyframes } from "styled-components";
import ChatWindow from "../ChatWindow";
import Modal from "../Modal";

const HeroContainer = styled.div`
  background-image: url("/background-image.png"); // Update background image path
  background-size: cover; // Cover the entire screen
  background-position: center; // Center the background image
  background-repeat: no-repeat; // Do not repeat the image
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextAndInputContainer = styled.div`
  max-width: 800px;
  height: 400px; // Set a fixed height for the TextAndInputContainer
  display: flex;
  flex-direction: column;
  justify-content: flex-end; // Position the input field at the bottom
  align-items: center;
  text-align: center;
`;

const HeroText = styled.h1`
  font-size: 48px;
  margin-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.3); // Add slight background
  padding: 10px;
  border-radius: 5px;
  width: 800px; // Add a fixed width
  white-space: pre-wrap; // Allow wrapping to a new line
  overflow-wrap: break-word; // Add this line to break words when needed
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 18px; // Increase font size
  border: none; // Remove border
  border-radius: 25px; // Add rounded corners
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Add shadow for a floating appearance
  background-color: #fff; // Change background color to white for contrast
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15); // Enhance shadow on focus
    transform: translateY(-2px); // Slight lift on focus for a floating effect
  }
  background-color: rgba(255, 255, 255, 0.9);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: rgba(
    70,
    130,
    180,
    0.9
  ); // Make buttons slightly transparent
  border-radius: 25px; // Add rounded corners
  &:hover {
    background-color: rgba(
      70,
      130,
      180,
      1
    ); // Make buttons more opaque on hover
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  height: 500px; // Set a fixed height for the ContentWrapper
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; // Distribute space between child elements
  text-align: center;
`;

const AnimatedText = ({ phrases }) => {
  const typedTarget = useRef(null);

  useEffect(() => {
    const options = {
      strings: phrases,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      backDelay: 2000,
    };

    const typedInstance = new Typed(typedTarget.current, options);

    return () => {
      typedInstance.destroy();
    };
  }, [phrases]);

  return <span ref={typedTarget} />;
};

const HeroSection = () => {
  const [showChat, setShowChat] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const phrases = [
    "To find the answer, you must ask the right question.",
    "Judge a man by his questions rather than by his answers. - Voltaire",
    "It is not the answer that enlightens, but the question. - Eugene Ionesco",
    "The answer to the ultimate question of life, the universe and everything is 42. - Douglas Adams",
    "Asking the right questions takes as much skill as giving the right answers. - Robert Half",
    "The art and science of asking questions is the source of all knowledge. - Thomas Berger",
    "The uncreative mind can spot wrong answers, but it takes a very creative mind to spot wrong questions. - Antony Jay",
    "The key to wisdom is this—constant and frequent questioning, for by doubting we are led to question, by questioning we arrive at the truth. - Peter Abelard",
    "To be on a journey is nothing more or less than to become an asker of questions. - Sam Keen",
    "He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever. - Chinese Proverb",
    "The only interesting answers are those that destroy the questions. - Susan Sontag",
    "The questions we ask determine the answers we find. - Tony Robbins",
    "The power to question is the basis of all human progress. - Indira Gandhi",
    "The best scientists and explorers have the attributes of kids! They ask questions and have a sense of wonder. - Sylvia Earle",
    "The most important questions in life can never be answered by anyone except oneself. - John Fowles",
    "A wise man can learn more from a foolish question than a fool can learn from a wise answer. - Bruce Lee",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "In school, we're rewarded for having the answer, not for asking a good question. - Richard Saul Wurman",
    "Questions are the creative acts of intelligence. - Frank Kingdon",
    "The question is not what you look at, but what you see. - Henry David Thoreau",
    "We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself. - Lloyd Alexander",
  ];
  const handleAskSidekick = () => {
    setShowChat(true);
  };

  const handleTalkToHuman = () => {
    setShowModal(true);
  };

  return (
    <>
      <HeroContainer>
        <ContentWrapper>
          <TextAndInputContainer>
            <HeroText>
              <AnimatedText phrases={phrases} />
            </HeroText>
            <Input type="text" placeholder="How can AnswerAI help you?" />
          </TextAndInputContainer>
          <ButtonContainer>
            <Button onClick={handleAskSidekick}>Ask Sidekick</Button>
            <Button onClick={handleTalkToHuman}>Talk to a Human</Button>
          </ButtonContainer>
          {showChat && <ChatWindow />}
        </ContentWrapper>
      </HeroContainer>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </>
  );
};

export default HeroSection;
