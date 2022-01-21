import { styled } from "../../../../lib/AppTheme";

const ButtonWrapper = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme?.importantButton?.background?.color ||
    props.theme.color.primary ||
    "black"};
  color: ${(props) => props.theme.importantButton?.color || "white"};
  border: none;
  border-radius: 1rem;
  width: ${(props) => props.theme.importantButton?.width || "fit-content"};
  padding: ${(props) => props.theme.importantButton?.padding || "0.5rem 1rem"};
  font-size: ${(props) => props.theme.importantButton?.font?.size || "1rem"};
  font-weight: ${(props) =>
    props.theme.importantButton?.font?.weight || "bold"};

  &:hover {
    outline-width: ${(props) =>
      props.theme.importantButton?.outline?.width || "2px"};
    outline-style: solid;
    outline-color: ${(props) =>
      props.theme.importantButton?.color ||
      props.theme.color.primary ||
      "black"};
  }
`;

export default ButtonWrapper;
