import UpdatePresidentForm from "./_components/UpdatePresidentForm";
import { getOnePresident } from "../queries";
import { type FunctionComponent } from "react";

interface AdminPresidentDetailsProps {
  params: {
    id: string;
  };
}

const AdminPresidentDetails: FunctionComponent<
  AdminPresidentDetailsProps
> = async ({ params: { id } }) => {
  const president = await getOnePresident(id);

  return (
    <div>
      <h4 className="mb-8 font-medium">Update president</h4>
      {president && <UpdatePresidentForm president={president} />}
    </div>
  );
};

export default AdminPresidentDetails;
