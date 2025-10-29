export interface TSidebarItems {
  title: string;
  link: string;
  image: string;
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
        name: 'Home',
        links: [
            {
                title: "Home",
                link: "",
                image: ""
            },
            {
                title: "Home",
                link: "",
                image: ""
            },
            {
                title: "Home",
                link: "",
                image: ""
            },
            {
                title: "Home",
                link: "",
                image: ""
            },
            {
                title: "Home",
                link: "",
                image: ""
            },
        ]
    }
]

export default sidebarData;