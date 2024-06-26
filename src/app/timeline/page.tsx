import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import { getManyTimeline } from "../admin/timeline/queries";
import Timelines from "./_components/Timelines";
import NoItems from "../_components/NoItems";

const Timeline = async () => {
  const timelines = await getManyTimeline(0, 12);

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Timeline"
      description="Empowering Unity, Celebrating Diversity: Our Journey Through Time."
    >
      {timelines.length > 0 ? (
        <Timelines data={timelines} />
      ) : (
        <NoItems title="timeline" />
      )}
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Timeline;
