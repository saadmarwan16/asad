import styles from "@asad/styles/home.module.css";
import Header from "./_components/Header";
import Welcome from "./_components/Welcome";
import About from "./_components/About";
import Activities from "./_components/Activities";

export default async function Home() {
  return (
    <div id={styles.mainContainer}>
      <Header />
      <Welcome />
      <main className="text-2xl text-white">
        <section className="h-screen bg-red-900 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Leadership info here</div>
        </section>
        <About />
        <Activities />
        <section className="h-screen bg-primary-200 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Contact us here</div>
        </section>
      </main>
      <footer className="bg-primary-300">Footer information here</footer>
    </div>
  );
}
