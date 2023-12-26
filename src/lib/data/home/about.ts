import { Urls } from "@asad/lib/urls";

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
        title: 'About us',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Urls.ABOUT,
        image: '/images/about-us.jpg'
    },
    {
        number: '02',
        title: 'Aims',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Urls.AIMS,
        image: '/images/aims.jpg'
    },
    {
        number: '03',
        title: 'Presidents',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Urls.PRESIDENTS,
        image: '/images/presidents.jpg'
    },
    {
        number: '04',
        title: 'Timeline',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: Urls.TIMELINE,
        image: '/images/timeline.jpg'
    },
]