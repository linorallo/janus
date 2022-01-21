import type { NextApiRequest, NextApiResponse } from 'next'
import { Theme } from '../../types/profile/Theme'
const theme: Theme = {
    id: "solo-like",
    name: "Solo Like",
    primary: "red",
    secondary: "#ff9800",
    tertiary: "#ff5722",
    color: "#565656",
    pinDrop: { color: "#C0C5C6" },
    borderWidth: "1px",
    padding: "10px",
    link: {

        background: {
            color: "#FBC334",
        },
    },
    profileImage: {
        width: "100px",
        height: "100px",
        margin: {
            top: "-5rem",
        },
        border: {
            radius: "50%",
            width: "5px",
            color: "white",
        },
        background: {
            color: "white",
        },
        boxShadow: "0px 0px 8px white, 0px 0px 64px #F5F4F7",
    },
    socialButton: {
        border: {
            radius: "100%",
        },
        background: {
            color: "white",
        },
    },
}


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Theme>
) {
    res.status(200).json(theme)
}
