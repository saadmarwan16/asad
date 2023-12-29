export interface IActivityItem {
    id: string;
    title: string;
    date: string;
    image: string;
}

export const activities: IActivityItem[] = [
    {
        id: '1',
        title: 'Our annual Afro Party',
        date: '30th Dcecember, 2023',
        image: '/images/about-us.jpg'
    },
    {
        id: '2',
        title: 'Screening of The First Grader movie',
        date: '23rd December, 2023',
        image: '/images/aims.jpg'
    },
    {
        id: '3',
        title: 'Technical Tourism',
        date: '20th Dcecember, 2023',
        image: '/images/presidents.jpg'
    },
    {
        id: '4',
        title: 'First Aid Program',
        date: '12th August, 2023',
        image: '/images/timeline.jpg'
    },
    {
        id: '5',
        title: 'ASAD Eid Picnic',
        date: '25th June, 2023',
        image: '/images/activities-1.jpg'
    },
    {
        id: '6',
        title: 'ASAD Health Hiking',
        date: '29th May, 2023',
        image: '/images/activities-2.jpg'
    },
]