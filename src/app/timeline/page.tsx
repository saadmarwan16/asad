import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import { getManyTimeline } from "../admin/timeline/queries";
import Timelines from "./_components/Timelines";

const Timeline = async () => {
  const timelines = await getManyTimeline(0, 12);

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Timeline"
      description="Empowering Unity, Celebrating Diversity: Our Journey Through Time."
    >
      <Timelines data={timelines} />
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Timeline;
