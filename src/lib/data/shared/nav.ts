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
        title: 'Executive team',
        link: Routes.EXECUTIVE_TEAM
    },
    {
        title: 'About',
        link: Routes.ABOUT
    },
    {
        title: 'Timeline',
        link: Routes.TIMELINE
    },
    {
        title: 'Activities',
        link: Routes.ACTIVITIES
    }
]