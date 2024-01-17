import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import { activities } from "@asad/lib/data/home/activities";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import PresidentCard from "./_components/PresidentCard";

const Presidents = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Presidents"
      description="Our Legacy Leaders: Guiding with Vision, Leading with Excellence."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {activities.map((activity) => (
          <PresidentCard activity={activity} />
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Presidents;
