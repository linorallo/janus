import { ReactChildren, ReactChild, useContext } from "react";

import React from "react";
import Image from "next/image";
import { styled, ThemeContext } from "../../lib/ThemeContext";

interface LinkWrapperProps {
  background?: {
    color?: string;
  };
  border?: {
    color?: string;
    width?: string;
  };
  color?: string;
}

const LinkWrapper = styled.a<LinkWrapperProps>`
  border-width: ${(props) =>
    props.theme?.link?.border?.width || props?.border?.width || "0"};
  border-color: ${(props) =>
    props.theme?.link?.border?.color ||
    props?.border?.color ||
    props.theme?.secondary};

  border-style: solid;
  border-radius: ${(props) => props.theme?.link?.border?.radius || "0"};
  padding: ${(props) => props.theme?.link?.padding || "0rem 0rem"};
  margin: ${(props) => props.theme?.link?.margin || props.theme?.margin};
  font-size: ${(props) =>
    props.theme?.link?.font?.size || props.theme?.font?.size};
  font-weight: ${(props) =>
    props.theme?.link?.font?.weight || props.theme?.font?.weight};
  color: ${(props) =>
    props.theme?.link?.color || props?.color || props.theme?.color};
  cursor: pointer;
  width: ${(props) => props.theme?.link?.width || "100%"};
  text-align: ${(props) => props.theme?.link?.textAlign || "center"};
  display: flex;
  flex-direction: ${(props) => props.theme?.link?.flexDirection || "column"};
  align-items: ${(props) => props.theme?.link?.alignItems || "center"};
  justify-content: ${(props) =>
    props.theme?.link?.justifyContent || "space-between"};
  box-shadow: ${(props) =>
    props.theme?.link?.boxShadow || "0px 2px 8px 2px #C0C5C6"};
  background-color: ${(props) =>
    props.theme?.link?.background?.color || props?.background?.color};
  position: relative;
  overflow: ${(props) => props.theme?.link?.overflow || "hidden"};
  content: "${(props) => props.theme?.link?.background?.color}";
  display: flex;
  flex-direction: ${(props) => props.theme?.link?.flexDirection || "row"};
  min-height: ${(props) => props.theme?.link?.minHeight || "80px"};
`;

const LinkText = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const LinkIcon = styled.span`
  position: ${(props) => props.theme?.link?.icon?.position || "relative"};
  left: ${(props) => props.theme?.link?.icon?.left || "-3px"};
  right: ${(props) => props.theme?.link?.icon?.right || "100%"};
  width: ${(props) => props.theme?.link?.icon?.width || "80px"};
  height: ${(props) => props.theme?.link?.icon?.height || "auto"};
  max-height: ${(props) => props.theme?.link?.icon?.maxHeight || "80px"};
  border-radius: ${(props) => props.theme?.link?.icon?.border?.radius || "0"};
  box-shadow: ${(props) => props.theme?.link?.icon?.boxShadow || "0 0 0 0"};
  border: ${(props) => props.theme?.link?.icon?.border?.width || "0px"} solid
    ${(props) => props.theme?.link?.icon?.border?.color || props.theme?.primary};
  background-color: ${(props) =>
    props.theme?.link?.icon?.background?.color || props.theme?.secondary};
  padding: ${(props) => props.theme?.link?.icon?.padding || "2rem"};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImageWrapper = styled.div``;

const Link = ({
  link,
  title,
  description,
  img,
  variant,
}: {
  link: string;
  title: string;
  description?: string;
  img?: string;
  variant?:
    | "minimalist"
    | "standard"
    | "standard-with-icon"
    | "minimalist-with-icon";
}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  if (variant === "standard-with-icon" && img)
    return (
      <LinkWrapper
        href={link}
        //theme={{ theme?.link?.flexDirection || "row", linkOverflow: "visible" }}
        theme={{
          link: {
            color: theme?.link?.color || theme?.color,
            background: {
              color: theme.link?.background?.color || theme.secondary,
            },
            border: {
              color: theme.link?.border?.color,
              width: theme.link?.border?.width,
            },
          },
        }}
      >
        <LinkIcon>
          <ImageWrapper>
            <Image
              src={img}
              layout="fixed"
              width={theme.link?.icon?.width || "50px"}
              height={theme.link?.icon?.height || "50px"}
            />
          </ImageWrapper>
        </LinkIcon>
        <LinkText>
          <h3>{title}</h3>
          <p>{description}</p>
        </LinkText>
      </LinkWrapper>
    );
  return (
    <LinkWrapper href={link}>
      <LinkText>
        <h3>{title}</h3>
        <p>{description}</p>
      </LinkText>
    </LinkWrapper>
  );
};

export default Link;
