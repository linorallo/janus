import { motion } from "framer-motion";
import { createContext, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomizationPanel from "../../components/app/editor/CustomizationPanel";
import DeviceFrame from "../../components/app/editor/DeviceFrame";
import ProfileComponent from "../../components/profile/Profile";
import { styled } from "../../lib/AppTheme";
import { defaultTheme } from "../../lib/ThemeContext";
import { Profile } from "../../types/profile/Profile";
const defaultProfile: Profile = {
  title: "John Doe",
  description: "Software Engineer",
  image: "https://ui-avatars.com/api/?name=John+Doe",
  socialNetworks: [
    { id: "linkedin", url: "https://linkedin.com/in/linorallo" },
    { id: "facebook", url: "https://facebook.com/linorallo" },
    { id: "instagram", url: "https://instagram.com/linorallo" },
  ],
  connections: [
    { service: "spotify", id: "1OyJuuGTC6T0O2DweBNswP" },
    { service: "soundcloud", id: "159082141" },
  ],
  links: [
    {
      title: "Github",
      url: "https://github.com/linorallo",
      image: "/logos/social/github.svg",
      description: "Check out some of my work",
    },
    {
      title: "Twitter",
      url: "twitter.com/linorallo",
      image: "/logos/social/twitter.svg",
    },
    {
      title: "Youtube",
      url: "https://youtube.com/linorallo",
      image: "/logos/social/youtube.svg",
    },
  ],
  themeId: "solo-like",
  location: "London, UK",
};

const EditorPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.background || "#F5F5F5"};
  min-height: 100vh;
`;

type ProfileContext = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
};

export const ProfileContext = createContext<ProfileContext>({
  profile: defaultProfile,
  setProfile: () => {},
});

const EditorPage = () => {
  const [profile, setProfile] = useState(defaultProfile);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <EditorPageWrapper
        as={motion.div}
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit={{ x: "-100vw", opacity: 0 }}
      >
        <CustomizationPanel />
        <DeviceFrame>
          <ProfileComponent />
        </DeviceFrame>
      </EditorPageWrapper>
    </ProfileContext.Provider>
  );
};

export default EditorPage;

export const animationVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};
