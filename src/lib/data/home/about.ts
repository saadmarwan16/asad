import { Routes } from "@asad/lib/routes";

export interface IAbout {
    number: string;
    title: string;
    details: string;
    url: string;
    image: string;
}

export const about: IAbout[] = [
    {
        number: '01',
        title: 'About',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Routes.ABOUT,
        image: '/images/about-us.jpg'
    },
    {
        number: '02',
        title: 'Aims',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Routes.AIMS,
        image: '/images/aims.jpg'
    },
    {
        number: '03',
        title: 'Presidents',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Routes.PRESIDENTS,
        image: '/images/presidents.jpg'
    },
    {
        number: '04',
        title: 'Timeline',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Routes.TIMELINE,
        image: '/images/timeline.jpg'
    },
]