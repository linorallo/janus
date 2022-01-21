// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Profile } from '../../types/Profile'

const profile: Profile = {
    title: "John Doe",
    description: "Software",
    image: "https://ui-avatars.com/api/?name=John+Doe",
    socialNetworks: [ { id: "linkedin", url: "https://linkedin.com/in/linorallo" }, { id: "facebook", url: "https://facebook.com/linorallo" }, { id: "instagram", url: "https://instagram.com/linorallo" } ],
    connections: [ { service: "spotify", id: "1OyJuuGTC6T0O2DweBNswP" }, { service: "soundcloud", id: "159082141" } ],
    links: [ { title: "Github", url: "https://github.com/linorallo", image: "/logos/social/github.svg", description: "Check out some of my work" }, { title: "Twitter", url: "twitter.com/linorallo", image: "/logos/social/twitter.svg" }, { title: "Youtube", url: "https://youtube.com/linorallo", image: "/logos/social/youtube.svg" } ],
    themeId: "solo-like",
    location: "London, UK"
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Profile>
) {
    res.status(200).json(profile)
}
