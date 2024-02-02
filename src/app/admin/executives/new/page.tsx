import Button from "@asad/lib/ui/Button";
import Input from "@asad/lib/ui/Input";
import Select from "@asad/lib/ui/Select";
import Textarea from "@asad/lib/ui/Textarea";
import styles from "@asad/styles/admin/new_executive.module.css";
import { FaImage } from "react-icons/fa";

const AdminAddExecutive = () => {
  return (
    <div>
      <h4 className="mb-8 font-medium">Add executive memeber</h4>
      <form id={styles.form}>
        <div id={styles.name}>
          <Input top="Name" placeholder="Enter name here" />
        </div>
        <div id={styles.role}>
          <Select id="role" top="Role" defaultValue="">
            <option value="" disabled>
              Select a role
            </option>
            <option value="CEO">CEO</option>
            <option value="CTO">CTO</option>
            <option value="CFO">CFO</option>
          </Select>
        </div>
        <div id={styles.duties}>
          <Textarea
            top="Duties"
            placeholder="Write a short description of the executive member's role here"
            rows={8}
          />
        </div>
        <div id={styles.image} className="my-8">
          <div className="flex cursor-pointer flex-col items-center justify-center gap-6 rounded-lg border-2 border-primary-100 px-10 py-12 hover:border-primary-200">
            <FaImage className="text-6xl text-primary-200 sm:text-7xl md:text-8xl lg:text-9xl" />
            <span className="text-lg font-medium text-primary-300 md:text-xl">
              Add an image
            </span>
          </div>
        </div>
        <div id={styles.button}>
          <Button type="submit" data-text="Add">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddExecutive;
