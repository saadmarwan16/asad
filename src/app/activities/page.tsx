import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import ActivitiesList from "./_components/Activities";
import { getManyActivities } from "../admin/activities/queries";
import NoItems from "../_components/NoItems";

const Activities = async () => {
  const activities = await getManyActivities();

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Activities"
      description="Our year-round activities focus on cultural exchange, academic support, and community building among African students in Denizli."
    >
      {activities.length > 0 ? (
        <ActivitiesList data={activities} />
      ) : (
        <NoItems title="activities" />
      )}
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Activities;
