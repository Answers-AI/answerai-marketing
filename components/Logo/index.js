import styled from "styled-components";
import Link from "next/link";

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link href="/" passHref>
      <LogoContainer>AnswerAI</LogoContainer>
    </Link>
  );
};

export default Logo;
