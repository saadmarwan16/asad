import { Urls } from "@asad/lib/urls";

interface INavItem {
    title: string;
    link: string;
}

export const nav: INavItem[] = [
    {
        title: 'Welcome',
        link: '#welcome'
    },
    {
        title: 'Leadership',
        link: '#leadership'
    },
    {
        title: 'About',
        link: '#about'
    },
    {
        title: 'Activities',
        link: '#activities'
    },
    {
        title: 'Contact',
        link: '#contact'
    },
    {
        title: 'Elections',
        link: Urls.ELECTIONS
    }
]