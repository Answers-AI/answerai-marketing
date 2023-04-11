import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: calc(100vh - 70px); // Set a minimum height subtracting the footer height
  padding-bottom: 70px; // Add padding to avoid overlapping with the fixed footer
`;


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;


const TermsPrivacy = () => {
    return (
        <>
          <Header>
            <Logo />
            <Navigation />
          </Header>
          <Container>
          <Title>Terms of Service & Privacy Policy</Title>
    
          <SubTitle>1. Introduction</SubTitle>
          <Content>
            Welcome to our website! By using our services, you agree to these terms and conditions. Please read them carefully.
          </Content>
    
          <SubTitle>2. Privacy Policy</SubTitle>
          <Content>
            We are committed to protecting your privacy. Our Privacy Policy explains how we collect, use, and protect your personal information.
          </Content>
    
          {/* Add more sections as needed */}
    
        </Container>
          <Footer />
        </>
      );
};

export default TermsPrivacy;