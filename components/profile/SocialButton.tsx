import Image from "next/image";
import { styled, ThemeContext } from "../../lib/ThemeContext";
import { useContext } from "react";
const ButtonWrapper = styled.a`
  position: relative;
  border-radius: ${(props) => props.theme.socialButton?.border?.radius || "0"};
  border: ${(props) => props.theme.socialButton?.border?.width || "0px"} solid
    ${(props) =>
      props.theme.socialButton?.border?.color || props.theme.secondary};
  background-color: ${(props) =>
    props.theme.socialButton?.background?.color || props.theme.primary};
  box-shadow: ${(props) => props.theme.socialButton?.boxShadow || "0 0 0 0"};
  overflow: hidden;
  padding: ${(props) => props.theme.socialButton?.padding || "8px"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButton = ({ iconSrc, href }: { iconSrc: string; href: string }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ButtonWrapper href={href}>
      <Image
        src={iconSrc}
        layout="fixed"
        width={theme.socialButton?.width || 16 * 1.5}
        height={theme.socialButton?.height || 16 * 1.5}
      />
    </ButtonWrapper>
  );
};
export default SocialButton;
