import { Routes } from "@asad/lib/routes";

interface INavItem {
    title: string;
    link: string;
}

export const nav: INavItem[] = [
    {
        title: 'Home',
        link: Routes.HOME
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
        link: Routes.ELECTIONS
    }
]