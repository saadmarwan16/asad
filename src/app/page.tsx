import styles from "@asad/styles/home.module.css";
import Header from "./_components/home/Header";
import Welcome from "./_components/home/Welcome";

export default async function Home() {
  return (
    <div id={styles.mainContainer}>
      <Header />
      <Welcome />
      <main className="text-2xl text-white">
        <section className="h-screen bg-red-900 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Leadership info here</div>
        </section>
        <section className="h-screen bg-orange-900 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">About us here</div>
        </section>
        <section className="h-screen bg-yellow-900 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Activities here</div>
        </section>
        <section className="h-screen bg-green-900 px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="mx-8 px-8">Contact us here</div>
        </section>
      </main>
      <footer id={styles.footer}>Footer information here</footer>
    </div>
  );
}
