import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { styled } from "../../../lib/AppTheme";
import { Profile } from "../../../types/profile/Profile";
import { ThemeContext } from "../../../lib/ThemeContext";
import ActionButton from "../utils/form/ActionButton";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./sections/SectionHeader";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { animationVariants } from "../../../pages/app/editor";
import SectionColors from "./sections/SectionColors";
//type Section = "header" | "social" | "services" | "link";
type Section = 0 | 1 | 2 | 3;

const CustomizationPanel = () => {
  const methods = useForm<Profile>();
  const themeCtx = useContext(ThemeContext);
  const [section, setSection] = useState<Section>(0);
  useEffect(() => {
    console.log(methods.formState.errors);
  }, [methods.formState.errors]);

  const onSubmit = (data: Profile) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <CustomizationPanelWrapper
        onSubmit={methods.handleSubmit(onSubmit)}
        as={motion.form}
        variants={animationVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Customize your profile</h1>
        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            height: "70vh",
          }}
        >
          <AnimatePresence>
            {section === 0 && <SectionHeader />}
            {section === 1 && <SectionColors />}
          </AnimatePresence>
        </div>
        <SectionNavBar section={section} setSection={setSection} />
        {section === 3 && <ActionButton type="submit">Go</ActionButton>}
      </CustomizationPanelWrapper>
    </FormProvider>
  );
};

export default CustomizationPanel;

const NavIndicator = styled.div`
  width: fit-content;
  display: flex;
  gap: 5px;
  justify-content: space-space-around;
  align-items: center;
  span {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.color.secondary};
    content: "";
  }
  span.active {
    background-color: ${(props) => props.theme.color.primary};
  }
`;

const SectionNavBar = ({
  section,
  setSection,
}: {
  section: number;
  setSection: (section: any) => void;
}) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {section - 1 >= 0 && (
        <ActionButton onClick={() => setSection(section - 1)}>
          <BsArrowLeft />
        </ActionButton>
      )}
      {!(section - 1 >= 0) && <span />}
      <NavIndicator>
        {Array.from({ length: 4 }).map((_, i) => {
          const colors = [
            themeCtx.appTheme.color.primary,
            themeCtx.appTheme.color.secondary,
          ];
          return (
            <motion.span
              key={i}
              className={i === section ? "" : ""}
              initial={{ backgroundColor: themeCtx.appTheme.color.secondary }}
              animate={
                i === section
                  ? {
                      backgroundColor: themeCtx.appTheme.color.primary,
                    }
                  : {
                      backgroundColor: themeCtx.appTheme.color.secondary,
                    }
              }
            />
          );
        })}
      </NavIndicator>
      {!(section + 1 < 4) && <span />}
      {section + 1 < 4 && (
        <ActionButton onClick={() => setSection(section + 1)}>
          <BsArrowRight />
        </ActionButton>
      )}
    </div>
  );
};

const CustomizationPanelWrapper = styled.form`
  height: 100%;

  padding: 2rem;
  background-color: ${(props) => props.theme.color.background || "#F5F5F5"};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
