import { type FunctionComponent } from "react";
import UpdateExecutiveForm from "./_components/UpdateExecutiveForm";
import { api } from "@asad/trpc/server";

const AdminExecutiveDetails: FunctionComponent<{
  params: { id: string };
}> = async ({ params: { id } }) => {
  const { executive } = await api.executive.getOne.query({ id: parseInt(id) });

  return (
    <div>
      <h4 className="mb-8 font-medium">Update executive memeber</h4>
      <UpdateExecutiveForm executive={executive} />
    </div>
  );
};

export default AdminExecutiveDetails;
