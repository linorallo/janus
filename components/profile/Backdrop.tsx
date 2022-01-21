import { styled } from "../../lib/ThemeContext";
const BackdropWrapper = styled.div`
  height: ${(props) => props.theme.backdrop?.height || "18vh"};
  width: 100%;
  background-image: ${(props) =>
    props.theme?.backdrop?.backgroundImage ||
    `linear-gradient(to right, ${props.theme.tertiary}, ${props.theme.secondary})`};
  background-size: cover;
`;
const Backdrop = ({ imageSrc }: { imageSrc?: string }) => {
  console.log({ imageSrc });
  return (
    <BackdropWrapper
      style={imageSrc ? { backgroundImage: `url(${imageSrc})` } : {}}
    />
  );
};

export default Backdrop;
