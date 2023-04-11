import styled from "styled-components";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainContent = styled.main`
  min-height: calc(100vh - 70px);
  padding-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export default function ContactPage() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <MainContent>
        <Contact />
      </MainContent>
      <Footer />
    </>
  );
}
