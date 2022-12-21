import {GiDragonShield, GiWhiteBook, GiScrollUnfurled, GiScrollQuill,GiTrophy,GiHood,GiGreekTemple,GiExitDoor} from 'react-icons/gi';


export const SidebarData = [
    {
        title: "Profile",
        path: "/profile",
        icon: <GiHood size={50}/>,
    },
    {
        title: "Daily Quest",
        path: "/daily",
        icon: <GiScrollQuill size={50}/>,
    },
    {
        title: "Weekly Quest",
        path: "/weekly",
        icon: <GiScrollUnfurled size={50}/>,
    },
    {
        title: "Main Quest",
        path: "/mainq",
        icon: <GiWhiteBook size={50}/>,
    },
    {
        title: "Guild Quest",
        path: "/guildq",
        icon: <GiDragonShield size={50}/>,
    },
    {
        title: "Guild",
        path: "/guild",
        icon: <GiGreekTemple size={50}/>,
    },
    {
        title: "Achievements",
        path: "/achievements",
        icon: <GiTrophy size={50}/>,
    },    
    {
        title: "Logout",
        path: "/",
        icon: <GiExitDoor size={50}/>,
    },
]