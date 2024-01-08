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
        details: 'Bridging Cultures, Building an Inclusive Community in Denizli.',
        url: Routes.ABOUT,
        image: '/images/about.png'
    },
    {
        number: '02',
        title: 'Aims',
        details: 'Nurturing Inclusivity, Enriching Experiences, Fostering Growth.',
        url: Routes.AIMS,
        image: '/images/aims.png'
    },
    {
        number: '03',
        title: 'Presidents',
        details: 'Our Legacy Leaders: Guiding with Vision, Leading with Excellence.',
        url: Routes.PRESIDENTS,
        image: '/images/presidents.jpg'
    },
    {
        number: '04',
        title: 'Timeline',
        details: 'Empowering Unity, Celebrating Diversity: Our Journey Through Time.',
        url: Routes.TIMELINE,
        image: '/images/timeline.png'
    },
]