import Header from "../lib/components/Header";
import Welcome from "./_components/Welcome";
import About from "./_components/About";
import Activities from "./_components/Activities";
import Contact from "../lib/components/Contact";
import Footer from "@asad/lib/components/Footer";
import Leadership from "./_components/Leadership";
import { getManyActivities } from "./admin/activities/queries";

const Home = async () => {
  const activities = await getManyActivities();

  return (
    <div>
      <Header />
      <Welcome />
      <main>
        <Leadership />
        <About />
        {activities.length === 0 ? null : (
          <Activities activities={activities} />
        )}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
