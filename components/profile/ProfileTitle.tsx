import { styled } from "../../lib/ThemeContext";

const ProfileTitleWrapper = styled.h2`
  color: ${(props) => props.theme?.profileTitle?.color || props.theme.color};
  font-size: ${(props) => props.theme.profileTitle?.font?.size || "1.2rem"};
  font-weight: ${(props) => props.theme.profileTitle?.font?.weight || "bold"};
  margin: ${(props) => props.theme.profileTitle?.margin || "0"};
  font-family: ${(props) =>
    props.theme.profileTitle?.font?.family || "sans-serif"};
`;

const ProfileTitle = ({ children }: { children: any }) => {
  return <ProfileTitleWrapper>{children}</ProfileTitleWrapper>;
};
export default ProfileTitle;
