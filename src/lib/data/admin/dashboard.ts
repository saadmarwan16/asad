import { type IDashbaord } from "@asad/lib/interfaces/admin/dashboard";
import { Routes } from "@asad/lib/routes";

export const dashbaord: IDashbaord[] = [
    {
        title: 'Executive team',
        image: '/images/executives.png',
        link: Routes.ADMIN_EXECUTIVES
    },
    {
        title: 'Presidents',
        image: '/images/presidents.png',
        link: Routes.ADMIN_PRESIDENTS
    },
    {
        title: 'Timeline',
        image: '/images/timeline.png',
        link: Routes.ADMIN_TIMELINE
    },
    {
        title: 'Activities',
        image: '/images/activities-1.jpg',
        link: Routes.ADMIN_ACTIVITIES
    },
    {
        title: 'Elections',
        image: '/images/activities-2.jpg',
        link: Routes.ADMIN_ELECTIONS
    },
];