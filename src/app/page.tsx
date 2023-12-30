import styles from "@asad/styles/home.module.css";
import Header from "./_components/Header";
import Welcome from "./_components/Welcome";
import About from "./_components/About";
import Activities from "./_components/Activities";
import Contact from "./_components/Contact";
import Footer from "@asad/lib/components/Footer";
import Leadership from "./_components/Leadership";

export default async function Home() {
  return (
    <div id={styles.mainContainer}>
      <Header />
      <Welcome />
      <main>
        <Leadership />
        <About />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
