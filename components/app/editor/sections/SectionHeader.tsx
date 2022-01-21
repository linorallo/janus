import { motion } from "framer-motion";
import { watch } from "fs";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Color } from "react-color-palette";
import { useFormContext } from "react-hook-form";
import { ThemeContext } from "../../../../lib/ThemeContext";
import {
  animationVariants,
  ProfileContext,
} from "../../../../pages/app/editor";
import ColorPicker from "../../utils/form/ColorPickerPreview";
import Input from "../../utils/form/Input";
import Label from "../../utils/form/Label";
import PanelSection from "./PanelSection";
import { FiUploadCloud } from "react-icons/fi";
import ActionButton from "../../utils/form/ActionButton";
const SectionHeader = () => {
  const themeCtx = useContext(ThemeContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { register, watch } = useFormContext();

  const previewPicture = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0].type.split("/")[0] !== "image") return;
    setProfile({ ...profile, image: URL.createObjectURL(e.target.files[0]) });
  };
  const handleProfileTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const profileTitle = e.target.value;
    if (profile.image.includes("ui-avatars.com")) {
      const url = `https://ui-avatars.com/api/?name=${profileTitle
        .split(" ")
        .join("+")}`;
      setProfile({
        ...profile,
        image: url,
        title: profileTitle,
      });
      return;
    }
    setProfile({ ...profile, title: profileTitle });
  };

  return (
    <>
      <PanelSection>
        <h3>Basic Information</h3>

        <motion.div
          variants={animationVariants}
          initial="hidden"
          animate="visible"
        >
          <Label htmlFor="title">Title:</Label>

          <Input
            {...register("title", {
              required: {
                value: true,
                message: "You are forgetting the title.",
              },
            })}
            onChange={handleProfileTitle}
          />
        </motion.div>
        <div>
          <Label htmlFor="location">Location:</Label>
          <Input
            {...register("location")}
            onChange={(e) => {
              setProfile({ ...profile, location: e.target.value });
            }}
          />
        </div>
        <div>
          <Label htmlFor="description">Description:</Label>
          <Input
            {...register("description", {
              required: {
                value: true,
                message: "You are forgetting the description.",
              },
            })}
            onChange={(e) => {
              setProfile({ ...profile, description: e.target.value });
            }}
          />
        </div>
        <div>
          <Label
            htmlFor="profile-picture"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: themeCtx.appTheme.color.primary,
              borderRadius: "1rem",
              padding: "0.5rem 0.9rem",
              color: themeCtx.appTheme.color.background,
            }}
          >
            <FiUploadCloud />
            Upload Profile Picture
          </Label>
          <Input
            name="picture"
            type="file"
            onChange={previewPicture}
            id="profile-picture"
            style={{ display: "none" }}
          />
        </div>
        <div>
          <Label
            htmlFor="cover-picture"
            style={{
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: themeCtx.appTheme.color.primary,
              borderRadius: "1rem",
              padding: "0.5rem 0.9rem",
              color: themeCtx.appTheme.color.background,
            }}
          >
            <FiUploadCloud />
            Upload Cover Picture
          </Label>
          <Input
            name="picture"
            type="file"
            onChange={(e) =>
              setProfile({
                ...profile,
                cover: e.target.files
                  ? URL.createObjectURL(e.target.files[0])
                  : undefined,
              })
            }
            id="cover-picture"
            style={{ display: "none" }}
          />
          {!profile.image.includes("linear-gradient") && (
            <ActionButton
              style={{
                backgroundColor: themeCtx.appTheme.color.tertiary,
                fontWeight: "normal",
              }}
              onClick={() => {
                setProfile({ ...profile, cover: "" });
              }}
            >
              Remove Cover
            </ActionButton>
          )}
        </div>
      </PanelSection>
    </>
  );
};

export default SectionHeader;
