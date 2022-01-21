import styled from "styled-components";

const SocialBarWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialBar = ({ children }: { children: any }) => {
  return <SocialBarWrapper>{children}</SocialBarWrapper>;
};

export default SocialBar;
