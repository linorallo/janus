import Link from "next/link";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: 3rem;
  color: ${(props) => props.theme.color};
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Link href="/">Provided by Janus </Link>
    </FooterWrapper>
  );
};

export default Footer;
