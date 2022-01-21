import { NextPage } from "next";
import Link from "../components/profile/Link";
import styled from "styled-components";
import Card from "../components/profile/Card";
import ProfileImage from "../components/profile/ProfileImage";
import PinDrop from "../components/profile/PinDrop";
import Spotify from "../components/profile/embedments/Spotify";
import SoudCloud from "../components/profile/embedments/SoundCloud";
import SocialButton from "../components/profile/SocialButton";
import SocialBar from "../components/profile/SocialBar";
import ProfileDescription from "../components/profile/ProfileDescription";
import ProfileTitle from "../components/profile/ProfileTitle";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const TestPage: NextPage = () => {
  return (
    <Main>
      <Card>
        <ProfileImage src="https://picsum.photos/200" />
        <ProfileTitle>{"Lino Rallo"}</ProfileTitle>
        <ProfileDescription>{"Software Engineer"}</ProfileDescription>
        <SocialBar>
          <SocialButton
            href="https://wa.me/521123456XXXX"
            iconSrc="/logos/social/whatsapp.svg"
          />
          <SocialButton
            href="https://wa.me/521123456XXXX"
            iconSrc="/logos/social/tiktok.svg"
          />
          <SocialButton
            href="https://wa.me/521123456XXXX"
            iconSrc="/logos/social/youtube.svg"
          />
          <SocialButton
            href="https://wa.me/521123456XXXX"
            iconSrc="/logos/social/linkedin.svg"
          />
        </SocialBar>
        <PinDrop text="Seattle, WA" />
        <Link
          link="https://google.com"
          title="My OF"
          description="It's free!"
          img="https://picsum.photos/200"
          variant="standard-with-icon"
        >
          <p>Text</p>
        </Link>

        <Spotify trackCode="1OyJuuGTC6T0O2DweBNswP" />
        <SoudCloud type="tracks" id="159082141" />
        <SoudCloud type="tracks" id="236639720" />

        <Spotify trackCode="09JGXbYR8MXjg6byTnltfr" />
      </Card>
    </Main>
  );
};

export default TestPage;
