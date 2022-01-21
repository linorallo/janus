import { useContext, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Theme } from "../../types/profile/Theme";
import { Profile } from "../../types/profile/Profile";
import { ThemeContext } from "../../lib/ThemeContext";
import Backdrop from "./Backdrop";
import Card from "./Card";
import ProfileImage from "./ProfileImage";
import SocialBar from "./SocialBar";
import ProfileTitle from "./ProfileTitle";
import ProfileDescription from "./ProfileDescription";
import SocialButton from "./SocialButton";
import Spotify from "./embedments/Spotify";
import Soudcloud from "./embedments/SoundCloud";
import Link from "./Link";
import PinDrop from "./PinDrop";
import { useForm, useFormContext, useWatch } from "react-hook-form";
import { ProfileContext } from "../../pages/app/editor";

const ProfilePageWrapper = styled.main`
  padding-top: 0rem;
  background-color: "#c1cc";
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProfileComponent = () => {
  const { profile } = useContext(ProfileContext);
  const themeCtx = useContext(ThemeContext);
  useEffect(() => {
    //themeCtx.setTheme(theme);
  });

  return (
    <ThemeProvider theme={themeCtx.theme}>
      <ProfilePageWrapper>
        <Backdrop imageSrc={profile.cover} />
        <Card>
          <ProfileHeaderWrapper>
            <ProfileImage src={profile?.image} />
            <ProfileTitle>{profile.title}</ProfileTitle>
            {profile.location && <PinDrop text={profile.location} />}
            {profile.description && (
              <ProfileDescription>{profile.description}</ProfileDescription>
            )}
          </ProfileHeaderWrapper>

          <SocialBar>
            {profile.socialNetworks?.map((network) => {
              return (
                <SocialButton
                  key={network.id}
                  iconSrc={`/logos/social/${network.id}.svg`}
                  href={network.url}
                />
              );
            })}
          </SocialBar>
          {profile.connections?.map((connection) => {
            if (connection.service === "spotify")
              return <Spotify key={connection.id} trackCode={connection.id} />;
            if (connection.service === "soundcloud")
              return (
                <Soudcloud
                  key={connection.id}
                  type="tracks"
                  id={connection.id}
                />
              );
          })}
          {profile.links?.map((link) => {
            return (
              <Link
                variant="standard-with-icon"
                key={link.title}
                title={link.title}
                link={link.url}
                description={link.description}
                img={link.image}
              />
            );
          })}
        </Card>
      </ProfilePageWrapper>
    </ThemeProvider>
  );
};

export default ProfileComponent;
