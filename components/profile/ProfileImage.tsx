import Image from "next/image";
import { useContext } from "react";
import { styled, ThemeContext } from "../../lib/ThemeContext";
import { IoPersonSharp } from "react-icons/io5";

const ImageWrapper = styled.div`
  position: absolute;
  top: 5%;
  width: ${(props) => props.theme?.profileImage?.width || "150px"};
  height: ${(props) => props.theme?.profileImage?.height || "150px"};
  border-radius: ${(props) => props.theme?.profileImage?.border?.radius || "0"};
  border: ${(props) => props.theme?.profileImage?.border?.width || "1px"} solid
    ${(props) => props.theme?.profileImage?.border?.color || "green"};
  background-color: ${(props) =>
    props.theme?.profileImage?.background?.color || "green"};

  box-shadow: ${(props) => props.theme?.profileImage?.boxShadow || "0 0 0 0"};
  margin-top: ${(props) => props.theme?.profileImage?.margin?.top || "0"};
  overflow: hidden;
`;

const ProfileImage = ({ src }: { src: string }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ImageWrapper>
      {src ? (
        <Image
          src={src}
          width={theme?.profileImage?.width || "150px"}
          height={theme?.profileImage?.height || "150px"}
        />
      ) : (
        <IoPersonSharp />
      )}
    </ImageWrapper>
  );
};

export default ProfileImage;
