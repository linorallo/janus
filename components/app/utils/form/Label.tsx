import { styled } from "../../../../lib/AppTheme";
const Label = styled.label`
  color: ${(props) => props.theme.color.tertiary || "black"};
  font-size: 1rem;
`;
export default Label;
