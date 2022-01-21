import { styled } from "../../../../lib/AppTheme";

const Input = styled.input`
  width: 15rem;
  padding: 8px 5px;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  outline: 2px solid ${(props) => props.theme.color.disabled || "#FBC334"};
  &:focus {
    outline: 3px solid ${(props) => props.theme.color.primary || "#FBC334"};
  }
  color: ${(props) => props.theme.color?.text || "black"};
`;
export default Input;
