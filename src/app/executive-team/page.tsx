import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";

import ExecutiveMemberCard from "./_components/ExecutiveMemberCard";
import { getManyExecutives } from "../admin/executives/queries";

const ExecutiveTeam = async () => {
  const executives = await getManyExecutives();

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Executive team"
      description="Their vision, expertise and dedication have propelled the association to
    excellence and new heights."
    >
      <div id={styles.cards}>
        {executives.map((executive) => (
          <ExecutiveMemberCard key={executive.id} executive={executive} />
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default ExecutiveTeam;
