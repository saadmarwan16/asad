import { getManyTimeline } from "./queries";
import Timelines from "./_components/Timelines";

const AdminTimeline = async () => {
  const timelines = await getManyTimeline(0, 12);

  return (
    <div>
      <h4 className="mb-8 font-medium">Timeline</h4>
      <Timelines data={timelines} />
    </div>
  );
};

export default AdminTimeline;
