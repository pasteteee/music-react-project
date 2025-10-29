export interface TSidebarItems {
  title: string;
  link: string;
  image: string;
  isNew?: boolean;
}

export interface TSidebarData {
  name: string;
  links: TSidebarItems[];
}

export interface TSidebar {
  data: TSidebarData[];
}

const sidebarData: TSidebarData[] = [
    {
        name: 'HOME',
        links: [
            {
                title: "Home",
                link: "",
                image: "/img-sidebar/home.svg"
            },
            {
                title: "Search",
                link: "",
                image: "/img-sidebar/search.svg"
            },
            {
                title: "Likes",
                link: "",
                image: "/img-sidebar/like.svg"
            },
            {
                title: "Playlists",
                link: "",
                image: "/img-sidebar/playlist.svg"
            },
            {
                title: "Albums",
                link: "",
                image: "/img-sidebar/albums.svg"
            },
            {
                title: "Following",
                link: "",
                image: "/img-sidebar/following.svg"
            },
        ]
    },
    {
        name: 'GENERAL',
        links: [
            {
                title: "Settings",
                link: "",
                image: "/img-sidebar/settings.svg"
            },
            {
                title: "Subscription",
                link: "",
                image: "/img-sidebar/subscription.svg",
                isNew: true
            },
            {
                title: "Log out",
                link: "",
                image: "/img-sidebar/logout.svg"
            },
        ]
    }
]

export default sidebarData;