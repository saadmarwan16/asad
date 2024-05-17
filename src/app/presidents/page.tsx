import ExecutivePresidentTimelineActivitiesWrapper from "@asad/lib/components/ExecutivePresidentTimelineActivitiesWrapper";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import PresidentCard from "./_components/PresidentCard";
import { getManyPresidents } from "../admin/presidents/queries";
import NoItems from "../_components/NoItems";

const Presidents = async () => {
  const presidents = await getManyPresidents();

  return (
    <ExecutivePresidentTimelineActivitiesWrapper
      title="Presidents"
      description="Our Legacy Leaders: Guiding with Vision, Leading with Excellence."
    >
      {presidents.length > 0 ? (
        <div id={styles.cards}>
          {presidents?.map((president) => (
            <PresidentCard president={president} />
          ))}
        </div>
      ) : (
        <NoItems title="presidents" />
      )}
    </ExecutivePresidentTimelineActivitiesWrapper>
  );
};

export default Presidents;
