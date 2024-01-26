export abstract class Routes {
    static HOME = '/';
    static ABOUT = '/about-us';
    static AIMS = '/aims';
    static PRESIDENTS = '/presidents';
    static TIMELINE = '/timeline';
    static ACTIVITIES = '/activities';
    static ACTIVITY_DETAILS = (id: string) => `/activities/${id}`;
    static ELECTIONS = '/elections';
    static EXECUTIVE_TEAM = '/executive-team';

    // Admin routes
    static ADMIN_DASHBOARD = '/admin';
    static ADMIN_EXECUTIVES = '/admin/executives';
    static ADMIN_ADD_EXECUTIVE = '/admin/executives/new';
    static ADMIN_EXECUTIVE_DETAILS = (id: string) => `/admin/executives/${id}`;
    static ADMIN_PRESIDENTS = '/admin/presidents';
    static ADMIN_ADD_PRESIDENT = '/admin/presidents/new';
    static ADMIN_PRESIDENT_DETAILS = (id: string) => `/admin/presidents/${id}`;
    static ADMIN_TIMELINE = '/admin/timeline';
    static ADMIN_ADD_TIMELINE = '/admin/timeline/new';
    static ADMIN_TIMELINE_DETAILS = (id: string) => `/admin/timeline/${id}`;
    static ADMIN_ACTIVITIES = '/admin/activities';
    static ADMIN_ADD_ACTIVITY = '/admin/activities/new';
    static ADMIN_ACTIVITY_DETAILS = (id: string) => `/admin/activities/${id}`;
    static ADMIN_ELECTIONS = '/admin/elections';
    static ADMIN_ADD_ELECTION = '/admin/elections/new';
    static ADMIN_ELECTION_DETAILS = (id: string) => `/admin/elections/${id}`;
}