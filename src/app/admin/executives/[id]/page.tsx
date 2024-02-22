import { executives } from "@asad/lib/data/home/executives";
import UpdateExecutiveForm from "./_components/UpdateExecutiveForm";

const AdminExecutiveDetails = () => {
  const executive = executives[0];

  return (
    <div>
      <h4 className="mb-8 font-medium">Update executive memeber</h4>
      <UpdateExecutiveForm executive={executive} />
    </div>
  );
};

export default AdminExecutiveDetails;
