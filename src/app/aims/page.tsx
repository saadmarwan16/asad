import AboutAimsWrapper from "@asad/lib/components/AboutAimsWrapper";
import Image from "next/image";
import styles from "@asad/styles/shared/aboutaims.module.css";

const Aims = () => {
  return (
    <AboutAimsWrapper
      title="Aims"
      description="Nurturing Inclusivity, Enriching Experiences, Fostering Growth."
      url="/images/aims-large.png"
      alt="Aims"
    >
      <div id={styles.container}>
        <div
          id={styles.description}
          className="flex gap-4 px-4 py-8 sm:px-12 sm:py-10 md:px-16 md:py-12 lg:gap-16 lg:px-28 lg:py-16 xl:px-32"
        >
          <div className="hidden lg:block lg:basis-1/2"></div>
          <p className="basis-full lg:basis-1/2">
            Our aims include promoting cultural understanding, academic
            excellence, and personal and professional growth among African
            students in Denizli. The association organizes cultural events,
            social activities, educational workshops, and networking
            opportunities, and provides support for adapting to a new country.
            Its goal is to enhance the educational and social experiences of its
            members, fostering a sense of community and belonging.
          </p>
        </div>

        <div
          id={styles.content}
          className="flex flex-col gap-16 bg-base-200 px-4 py-8 sm:px-12 sm:py-12 md:px-16 lg:px-28 lg:py-16 xl:px-32"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            <div className="basis-1/2">
              <Image
                src="/images/aims-large.png"
                alt="About"
                width={400}
                height={500}
                className="aspect-[4/3] h-full w-full"
              />
            </div>
            <div className="basis-1/2">
              <h5 className="mb-3 sm:mb-4">Cultural Engagement Initiatives</h5>
              <p>
                We focus on promoting cultural understanding and diversity in
                Denizli by organizing cultural festivals, performances, and
                workshops that showcase African traditions and arts. These
                events facilitate dialogue and mutual respect among students
                from different backgrounds, aiming to enrich the educational
                environment with a deeper appreciation of African cultures and
                global inclusivity.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-16">
            <div className="basis-1/2">
              <h5 className="mb-3 sm:mb-4">Accelerated Integration Process</h5>
              <p>
                Our initiative of providing English-speaking lessons benefits
                both African students and Turkish locals. It facilitates
                cultural exchange by helping students learn about Turkish
                culture and express their own, while also aiding Turkish locals
                in improving their English skills. This mutual learning fosters
                enhanced communication and helps students feel more connected
                and engaged in their new environment.
              </p>
            </div>
            <div className="basis-1/2">
              <Image
                src="/images/aims-large.png"
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

export default Aims;
