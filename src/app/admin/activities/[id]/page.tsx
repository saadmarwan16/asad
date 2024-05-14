import UpdateActivityForm from "./_components/UpdateActivityForm";
import { type FunctionComponent } from "react";
import { getOneActivity } from "../queries";

interface AdminActivityDetailsProps {
  params: {
    id: string;
  };
}

const AdminActivityDetails: FunctionComponent<
  AdminActivityDetailsProps
> = async ({ params: { id } }) => {
  const activity = await getOneActivity(id);

  return (
    <div>
      <h4 className="mb-8 font-medium">Update activity</h4>
      {activity && <UpdateActivityForm activity={activity} />}
    </div>
  );
};

export default AdminActivityDetails;
