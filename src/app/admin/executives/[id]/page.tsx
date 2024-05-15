import { type FunctionComponent } from "react";
import UpdateExecutiveForm from "./_components/UpdateExecutiveForm";
import { getOneExecutive } from "../queries";

const AdminExecutiveDetails: FunctionComponent<{
  params: { id: string };
}> = async ({ params: { id } }) => {
  const executive = await getOneExecutive(id);

  return (
    <div>
      <h4 className="mb-8 font-medium">Update executive memeber</h4>
      <UpdateExecutiveForm executive={executive} />
    </div>
  );
};

export default AdminExecutiveDetails;
