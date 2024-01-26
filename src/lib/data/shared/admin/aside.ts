import type { IAside } from "@asad/lib/interfaces/aside";
import { Routes } from "@asad/lib/routes";

export const aside: IAside[] = [
    {
        title: 'Executive team',
        children: [
            {
                title: 'Add',
                link: Routes.ADMIN_ADD_EXECUTIVE
            },
            {
                title: 'List',
                link: Routes.ADMIN_EXECUTIVES
            },
        ],
    },
    {
        title: 'Presidents',
        children: [
            {
                title: 'Add',
                link: Routes.ADMIN_ADD_PRESIDENT
            },
            {
                title: 'List',
                link: Routes.ADMIN_PRESIDENTS
            },
        ],
    },
    {
        title: 'Timeline',
        children: [
            {
                title: 'Add',
                link: Routes.ADMIN_ADD_TIMELINE
            },
            {
                title: 'List',
                link: Routes.ADMIN_TIMELINE
            },
        ],
    },
    {
        title: 'Activities',
        children: [
            {
                title: 'Add',
                link: Routes.ADMIN_ADD_ACTIVITY
            },
            {
                title: 'List',
                link: Routes.ADMIN_ACTIVITIES
            },
        ],
    },
    {
        title: 'Elections',
        children: [
            {
                title: 'Add',
                link: Routes.ADMIN_ADD_ELECTION
            },
            {
                title: 'List',
                link: Routes.ADMIN_ELECTIONS
            },
        ],
    },
];