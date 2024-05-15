import Header from "@asad/lib/components/Header";
import ActivityHero from "./_components/ActivityHero";
import Footer from "@asad/lib/components/Footer";
import ActivityMain from "./_components/ActivityMain";
import { getOneActivity } from "@asad/app/admin/activities/queries";
import { type FunctionComponent } from "react";

interface ActivityDetailsProps {
  params: {
    id: string;
  };
};

const ActivityDetails: FunctionComponent<ActivityDetailsProps> = async ({
  params: { id },
}) => {
  const activity = await getOneActivity(id);

  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <ActivityHero activity={activity} />
      <ActivityMain activity={activity} />
      <Footer />
    </div>
  );
};

export default ActivityDetails;
