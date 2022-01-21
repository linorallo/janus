import { MouseEvent, useContext, useState } from "react";
import { Color, ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { styled } from "../../../../lib/AppTheme";
import { ThemeContext } from "../../../../lib/ThemeContext";
import * as profileCtx from "../../../../lib/ThemeContext";
import ActionButton from "./ActionButton";
const ColorWrapper = styled.div`
  position: relative;
`;
const ColorPickerWrapper = styled.div`
  position: absolute;
  top: 3rem;
  background-color: ${(props) => props.theme.color.secondary};
  padding: 0rem;
  margin-left: 0rem;
  z-index: 20;
`;

const ColorPickerComponent = ({
  color,
  selected,
  onClick,
}: {
  color: { id: string; color: string };
  selected: boolean;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}) => {
  const themeCtx = useContext(ThemeContext);
  const ColorPreview = profileCtx.styled.div`
  width: 40px;
  height: 40px;
  background-color: ${color.color};
  border-radius: 100%;
  outline-offset: 2px;
  outline: 3px solid ${
    selected ? themeCtx.appTheme.color.primary : "transparent"
  };
`;
  return (
    <ColorWrapper>
      <ColorPreview onClick={onClick} />
    </ColorWrapper>
  );
};

export default ColorPickerComponent;
