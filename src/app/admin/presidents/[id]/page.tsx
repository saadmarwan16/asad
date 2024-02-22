import { presidents } from "@asad/lib/data/home/presidents";
import UpdatePresidentForm from "./_components/UpdatePresidentForm";

const AdminPresidentDetails = () => {
  const president = presidents[0];

  return (
    <div>
      <h4 className="mb-8 font-medium">Update president</h4>
      <UpdatePresidentForm president={president} />
    </div>
  );
};

export default AdminPresidentDetails;
