import { ReactChild, ReactChildren } from "react";
import { styled } from "../../lib/ThemeContext";
import Footer from "./Footer";

const CardWrapper = styled.div`
  min-width: fit-content;
  width: ${(props) => props.theme.card?.width || "100%"};
  height: ${(props) => props.theme.card?.height || ""};
  padding: ${(props) => props.theme.card?.padding || "5rem 2rem 0rem 2rem "};
  padding-top: ${(props) =>
    typeof props.theme.card?.padding !== "string"
      ? props.theme.card?.padding?.top
      : props.theme.card?.padding || "5rem"};
  margin: ${(props) => props.theme.card?.margin || props.theme.margin};
  border: ${(props) =>
      props.theme.card?.border?.width || props.theme.border?.width}
    solid ${(props) => props.theme.card?.border?.color || props.theme.primary};
  border-radius: ${(props) => props.theme.card?.border?.radius || "0"};
  box-shadow: ${(props) => props.theme.card?.boxShadow || "0 0 0 0"};
  background-color: ${(props) =>
    props.theme.card?.background?.color ||
    props.theme?.background?.color ||
    props.theme.primary};
  color: ${(props) => props.theme.card?.color || props.theme.primary};
  display: ${(props) => props.theme.card?.display || "flex"};
  flex-direction: ${(props) => props.theme.card?.flexDirection || "column"};
  align-items: ${(props) => props.theme.card?.alignItems || "center"};
  justify-content: ${(props) => props.theme.card?.justifyContent || "center"};
  gap: ${(props) => props.theme.card?.gap || "2rem"};
  position: relative;
  max-width: ${(props) => props.theme.card?.maxWidth || "900px"};
`;

const Card = ({ children }: { children: ReactChild | ReactChildren | any }) => {
  return (
    <CardWrapper>
      {children}
      <Footer />
    </CardWrapper>
  );
};
export default Card;
