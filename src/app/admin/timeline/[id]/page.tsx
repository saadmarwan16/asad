import { timelines } from "@asad/lib/data/home/timelines";
import UpdateTimelineForm from "./_components/UpdateTimelineForm";

const AdminTimelineDetails = () => {
  const timeline = timelines[0];

  return (
    <div>
      <h4 className="mb-8 font-medium">Update timeline</h4>
      {timeline && <UpdateTimelineForm timeline={timeline} />}
    </div>
  );
};

export default AdminTimelineDetails;
