import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";

import ExecutiveMemberCard from "./_components/ExecutiveMemberCard";
import { getManyExecutives } from "../admin/executives/queries";
import NoItems from "../_components/NoItems";

const ExecutiveTeam = async () => {
  const executives = await getManyExecutives();

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Executive team"
      description="Their vision, expertise and dedication have propelled the association to
    excellence and new heights."
    >
      {executives.length > 0 ? (
        <div id={styles.cards}>
          {executives.map((executive) => (
            <ExecutiveMemberCard key={executive.id} executive={executive} />
          ))}
        </div>
      ) : (
        <NoItems title="executives" />
      )}
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default ExecutiveTeam;
