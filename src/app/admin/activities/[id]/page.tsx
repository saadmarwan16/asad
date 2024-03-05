import { activities } from "@asad/lib/data/home/activities";
import UpdateActivityForm from "./_components/UpdateActivityForm";

const AdminActivityDetails = () => {
  const activity = activities[0];
  return (
    <div>
      <h4 className="mb-8 font-medium">Update activity</h4>
      {activity && <UpdateActivityForm activity={activity} />}
    </div>
  );
};

export default AdminActivityDetails;
