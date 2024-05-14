import { getManyActivities } from "./queries";
import Activities from "./_components/Activities";

const AdminActivity = async () => {
  const activities = await getManyActivities(0, 1);

  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-medium">Activities</h4>
      <Activities data={activities} />
    </div>
  );
};

export default AdminActivity;
