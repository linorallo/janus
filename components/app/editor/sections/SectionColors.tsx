import { useContext, useEffect, useState } from "react";
import Palette, { Color, useColor, ColorPicker } from "react-color-palette";
import { styled } from "../../../../lib/AppTheme";
import { ThemeContext } from "../../../../lib/ThemeContext";
import { ProfileContext } from "../../../../pages/app/editor";
import ColorPreview from "../../utils/form/ColorPickerPreview";
import Label from "../../utils/form/Label";
import PanelSection from "./PanelSection";

const ColorsSection = () => {
  const themeCtx = useContext(ThemeContext);
  const [color, setColor] = useState<{ id: string; color: string }>({
    id: "background",
    color: "#F5F4F7",
  });
  const PaletteColor = useColor("hex", "#121212");
  const [colorSelected, setColorSelected] = useState<string>("");
  useEffect(() => {
    if (color?.id === "link.background.color") {
      themeCtx.setTheme({
        ...themeCtx.theme,
        link: {
          background: { color: color.color },
        },
      });
    }
    if (color?.id === "background.color") {
      themeCtx.setTheme({
        ...themeCtx.theme,
        background: {
          color: color.color,
        },
      });
    }
    if (color?.id === "pinDrop") {
      themeCtx.setTheme({
        ...themeCtx.theme,
        pinDrop: {
          color: color.color,
        },
      });
    }
    if (color.id === "text")
      themeCtx.setTheme({ ...themeCtx.theme, color: color.color });
  }, [color]);

  const handlePreviewClick = (colorId: string) => {
    setColor({ ...color, id: colorId });
    setColorSelected(colorId);
  };

  return (
    <PanelSection>
      <h3>Choose Some Colors</h3>
      <ColorPicker
        width={350}
        height={160}
        color={PaletteColor[0]}
        onChange={(e) => {
          PaletteColor[1](e);
          setColor({ id: color.id, color: e.hex });
        }}
        hideHSV
        hideHEX
        hideRGB
      />
      <ColorPreviewWrapper>
        <div>
          <Label htmlFor="background.color">Background</Label>
          <ColorPreview
            color={{
              id: "background.color",
              color: themeCtx.theme?.background?.color!,
            }}
            selected={colorSelected === "background.color"}
            onClick={() => handlePreviewClick("background.color")}
          />
        </div>
        <div>
          <Label htmlFor="link.background.color">Link Background</Label>
          <ColorPreview
            color={{
              id: "link.background.color",
              color: themeCtx.theme.link?.background?.color!,
            }}
            selected={colorSelected === "link.background.color"}
            onClick={() => handlePreviewClick("link.background.color")}
          />
        </div>
        <div>
          <Label htmlFor="accents">Accents</Label>
          <ColorPreview
            color={{ id: "text", color: color.color }}
            selected={colorSelected === "text"}
            onClick={() => handlePreviewClick("text")}
          />
        </div>
        <div>
          <Label htmlFor="text">Text</Label>
          <ColorPreview
            color={{
              id: "text",
              color: themeCtx.theme?.color || "#000",
            }}
            selected={colorSelected === "text"}
            onClick={() => handlePreviewClick("text")}
          />
        </div>
        <div>
          <Label htmlFor="pinDrop">Location</Label>
          <ColorPreview
            color={{
              id: "pinDrop",
              color: themeCtx.theme?.pinDrop?.color || "#000",
            }}
            selected={colorSelected === "pinDrop"}
            onClick={() => handlePreviewClick("pinDrop")}
          />
        </div>
      </ColorPreviewWrapper>
    </PanelSection>
  );
};

export default ColorsSection;

const ColorPreviewWrapper = styled.div`
  display: grid !important;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  width: 100%;
  flex-wrap: wrap;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
