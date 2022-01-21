import { MdLocationPin } from "react-icons/md";
import { styled } from "../../lib/ThemeContext";
const DropWrapper = styled.div`
  color: ${(props) => props.theme.pinDrop?.color || props.theme.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.pinDrop?.padding || props.theme.padding};
  margin: ${(props) => props.theme.pinDrop?.margin || props.theme.margin};
`;
const PinDrop = ({ text }: { text: string }) => {
  return (
    <DropWrapper>
      <MdLocationPin size={25} />
      {text}
    </DropWrapper>
  );
};

export default PinDrop;
