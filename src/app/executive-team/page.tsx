import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";

import ExecutiveMemberCard from "./_components/ExecutiveMemberCard";
import { executives } from "@asad/lib/data/home/executives";

const ExecutiveTeam = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Executive team"
      description="Their vision, expertise and dedication have propelled the association to
    excellence and new heights."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {executives.map((executive) => (
          <ExecutiveMemberCard key={executive.id} executive={executive} />
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default ExecutiveTeam;
