import axios from "axios";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import ProfileComponent from "../../components/profile/Profile";
import { defaultTheme, ThemeContext } from "../../lib/ThemeContext";
import { Profile } from "../../types/profile/Profile";
import { Theme } from "../../types/profile/Theme";

const ProfilePage = ({
  profile,
  theme,
}: {
  profile: Profile;
  theme: Theme;
}) => {
  return <ProfileComponent profile={profile} theme={theme} />;
};

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  const paths = users.map((user: any) => ({
    params: { userId: user.id.toString() },
  }));
  console.log(paths);
  return { paths, fallback: false };
}
export async function getStaticProps(context: any) {
  console.log(context);
  try {
    const res = await axios.get(
      `http://localhost:${process.env.PORT}/api/test`
    );
    const themeRes = await axios.get(
      `http://localhost:${process.env.PORT}/api/theme`
    );
    const id = context.params.userId;
    console.log("themeRes", themeRes.data);
    return {
      props: {
        profile: res.data,
        theme: themeRes.data,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {},
    };
  }
}
export default ProfilePage;
