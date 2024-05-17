import { getManyTimeline } from "./queries";
import Timelines from "./_components/Timelines";
import NoItems from "../_components/NoItems";
import { Routes } from "@asad/lib/routes";

const AdminTimeline = async () => {
  const timelines = await getManyTimeline(0, 12);

  return (
    <div>
      <h4 className="mb-8 font-medium">Timeline</h4>
      {timelines.length > 0 ? (
        <Timelines data={timelines} />
      ) : (
        <NoItems
          title="timline"
          buttonTitle="Add a timeline"
          route={Routes.ADMIN_ADD_TIMELINE}
        />
      )}
    </div>
  );
};

export default AdminTimeline;
