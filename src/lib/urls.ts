export abstract class Urls {
    static HOME = '/';
    static ABOUT = '/about-us';
    static AIMS = '/aims';
    static PRESIDENTS = '/presidents';
    static TIMELINE = '/timeline';
    static ACTIVITIES = '/activities';
    static ACTIVITY_DETAILS = (id: string) => `/activities/${id}`;
    static ELECTIONS = '/elections';
}