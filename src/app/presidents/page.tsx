import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import PresidentCard from "./_components/PresidentCard";
import { presidents } from "@asad/lib/data/home/presidents";

const Presidents = () => {
  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Presidents"
      description="Our Legacy Leaders: Guiding with Vision, Leading with Excellence."
    >
      <h6>Filter</h6>
      <div id={styles.cards}>
        {presidents.map((president) => (
          <PresidentCard president={president} />
        ))}
      </div>
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Presidents;
