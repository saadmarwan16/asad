import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import { activities } from "@asad/lib/data/home/activities";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";

import ExecutiveMemberCard from "./_components/ExecutiveMemberCard";

const ExecutiveTeam = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Executive team"
      description="Their vision, expertise and dedication have propelled the association to
    excellence and new heights."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {activities.map((activity) => (
          <ExecutiveMemberCard activity={activity} />
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default ExecutiveTeam;
