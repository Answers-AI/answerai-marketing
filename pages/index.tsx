import styled from 'styled-components';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export async function getServerSideProps() {
  return { props: {} };
}

export default function Home() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <HeroSection />
      <Footer />
    </>
  );
}
