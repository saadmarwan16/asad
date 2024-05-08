import UpdateTimelineForm from "./_components/UpdateTimelineForm";
import { getOneTimeline } from "../queries";
import { type FunctionComponent } from "react";

interface AdminTimelineDetailsProps {
  params: {
    id: string;
  };
}

const AdminTimelineDetails: FunctionComponent<
  AdminTimelineDetailsProps
> = async ({ params: { id } }) => {
  const timeline = await getOneTimeline(id);

  return (
    <div>
      <h4 className="mb-8 font-medium">Update timeline</h4>
      {timeline && <UpdateTimelineForm timeline={timeline} />}
    </div>
  );
};

export default AdminTimelineDetails;
