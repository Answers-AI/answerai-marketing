import styled from "styled-components";
import Link from "next/link";
import Script from "next/script";

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

const StyledLink = styled(Link)`
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
  const chatWidgetScript = `
      window.AnswersAI.init({
        iframeSrc:
          "https://answers-ai-web-ias.vercel.app/widgets/chat?apiKey=05031979",
      });
    `;

  return (
    <FooterContainer>
      <LinksContainer>
        <StyledLink href="/privacy">Privacy Policy</StyledLink>
        <StyledLink href="/terms">Terms of Service</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
      </LinksContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} AnswerAI All rights reserved.
      </Copyright>

      <div id="the-answer"></div>
      <Script
        id="the-answer-chat-widget"
        src="https://answers-ai-web-ias.vercel.app/main.js"
        type="application/javascript"
        onLoad={() => {
          console.log("test");
          window.AnswersAI.init({
            targetId: "the-answer",
            iframeSrc:
              "https://answers-ai-web-ias.vercel.app/widgets/chat?apiKey=05031979",
          });
        }}
      />
    </FooterContainer>
  );
};

export default Footer;
