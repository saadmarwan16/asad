import Header from "@asad/lib/components/Header";
import ActivityHero from "./_components/ActivityHero";
import Footer from "@asad/lib/components/Footer";
import ActivityMain from "./_components/ActivityMain";

const ActivityDetails = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Header />
      </div>
      <ActivityHero />
      <ActivityMain />
      <Footer />
    </div>
  );
};

export default ActivityDetails;
