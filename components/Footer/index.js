import styled from "styled-components";
import Link from "next/link";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #222;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <>
          <Link href="/privacy" passHref>
            <StyledLink>Privacy Policy</StyledLink>
          </Link>
        </>
        <>
          <Link href="/terms" passHref>
            <StyledLink>Terms of Service</StyledLink>
          </Link>
        </>
        <>
          <Link href="/contact" passHref>
            <StyledLink>Contact</StyledLink>
          </Link>
        </>
      </LinksContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} AnswerAI All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
