import styles from "@asad/styles/home.module.css";
import Header from "./_components/Header";
import Welcome from "./_components/Welcome";
import About from "./_components/About";
import Activities from "./_components/Activities";
import Contact from "./_components/Contact";
import Footer from "@asad/lib/components/Footer";

export default async function Home() {
  return (
    <div id={styles.mainContainer}>
      <Header />
      <Welcome />
      <main className="">
        <section className="h-screen bg-primary-300 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Leadership info here</div>
        </section>
        <About />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
