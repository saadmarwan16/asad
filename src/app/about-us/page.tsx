import AboutAimsWrapper from "@asad/lib/components/AboutAimsWrapper";
import Image from "next/image";
import styles from "@asad/styles/shared/aboutaims.module.css";

const AboutUs = () => {
  return (
    <AboutAimsWrapper
      title="About"
      description="Bridging Cultures, Building an Inclusive Community in Denizli."
      url="/images/about-large.png"
      alt="About"
    >
      <div id={styles.container}>
        <div
          id={styles.description}
          className="flex gap-4 px-4 py-8 sm:px-12 sm:py-10 md:px-16 md:py-12 lg:gap-16 lg:px-28 lg:py-16 xl:px-32"
        >
          <div className="hidden lg:block lg:basis-1/2"></div>
          <p className="basis-full lg:basis-1/2">
            ASAD, the African Students Association in Denizli, founded in 2015,
            is a vibrant, inclusive community dedicated to celebrating African
            heritage and fostering cultural diversity. It provides a supportive
            environment for African students, facilitating academic and social
            engagement. By organizing various cultural, social and educational
            activities, ASAD enhances the student experience and contributes
            positively to Denizli's multicultural landscape.
          </p>
        </div>

        <div
          id={styles.content}
          className="flex flex-col gap-16 bg-base-200 px-4 py-8 sm:px-12 sm:py-12 md:px-16 lg:px-28 lg:py-16 xl:px-32"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            <div className="basis-1/2">
              <Image
                src="/images/about-large.png"
                alt="About"
                width={400}
                height={500}
                className="aspect-[4/3] h-full w-full"
              />
            </div>
            <div className="basis-1/2">
              <h5 className="mb-3 sm:mb-4">Celebrating African Heritage</h5>
              <p>
                We actively promote cultural diversity and African heritage
                through various events like cultural nights, music and dance
                performances, and cuisine tastings. We also organize educational
                activities focused African history and contemporary issues.
                These activities not only celebrate African cultures but also
                educate and foster a deeper understanding among the wider
                student body, contributing to a more inclusive and globally
                aware community.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            <div className="basis-1/2">
              <h5 className="mb-3 sm:mb-4">Enriching Students Lives</h5>
              <p>
                We enhance the well-being of African students in Denizli by
                fostering a supportive community. We do so by organizing social
                events, cultural nights, and sports activities for interaction
                and friendship. Additionally, we provide guidance on navigating
                life in a new country, including practical advice on local
                customs, legal matters, and adapting to the educational system.
                These efforts ensure a balanced and fulfilling experience for
                students, creating a home away from home.
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src="/images/about-large.png"
                alt="About"
                width={400}
                height={500}
                className="aspect-[4/3] h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </AboutAimsWrapper>
  );
};

export default AboutUs;
