import { getManyActivities } from "./queries";
import Activities from "./_components/Activities";
import NoItems from "../_components/NoItems";
import { Routes } from "@asad/lib/routes";

const AdminActivity = async () => {
  const activities = await getManyActivities(0, 1);

  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-medium">Activities</h4>
      {activities.length > 0 ? (
        <Activities data={activities} />
      ) : (
        <NoItems
          title="activities"
          buttonTitle="Add an Activity"
          route={Routes.ADMIN_ADD_ACTIVITY}
        />
      )}
    </div>
  );
};

export default AdminActivity;
