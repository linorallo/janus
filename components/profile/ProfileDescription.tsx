import { styled } from "../../lib/ThemeContext";

const ProfileDescriptionWrapper = styled.p`
  color: ${(props) => props.theme.color};
  font-size: ${(props) => props.theme.profileDescription?.font?.size || "1rem"};
  font-weight: ${(props) =>
    props.theme.profileDescription?.font?.weight || "400"};
  margin: ${(props) => props.theme.profileDescription?.margin || "0"};
  font-family: ${(props) =>
    props.theme.profileDescription?.font?.family || "sans-serif"};
`;

const ProfileDescription = ({ children }: { children: any }) => {
  return <ProfileDescriptionWrapper>{children}</ProfileDescriptionWrapper>;
};
export default ProfileDescription;
