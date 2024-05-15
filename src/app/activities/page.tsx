import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import ActivitiesList from "./_components/Activities";
import { getManyActivities } from "../admin/activities/queries";

const Activities = async () => {
  const activities = await getManyActivities();

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Activities"
      description="Our year-round activities focus on cultural exchange, academic support, and community building among African students in Denizli."
    >
      <ActivitiesList data={activities} />
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Activities;
