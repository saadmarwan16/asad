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
        <p id={styles.description} className="mb-12 lg:mb-0">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          quibusdam accusamus maxime laboriosam iste commodi. Est adipisci
          tempore, vero officia voluptatum perferendis quasi necessitatibus
          quisquam eaque pariatur rerum neque possimus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Tenetur, dolorum adipisci! In iure
          quasi, ut a iusto quaerat veniam officiis recusandae veritatis
          blanditiis quis laborum. Aspernatur quis exercitationem veritatis
          incidunt.
        </p>
        <div id={styles.imageOne}>
          <Image
            src="/images/about-large.png"
            alt="About"
            width={400}
            height={500}
            className="aspect-video h-full w-full"
          />
        </div>
        <div id={styles.contentOne} className="mb-12 lg:mb-0">
          <h5>This is title 1</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            nobis earum dolor velit. Fugit pariatur voluptates magni sequi cum
            ratione. Accusamus reiciendis delectus exercitationem natus dolorem,
            consequuntur adipisci. Consectetur, alias. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Voluptatum sunt dolorum incidunt
            officia nostrum doloribus deleniti? Fuga odio quod veniam, nobis rem
            dolorem, perferendis dolorum accusamus blanditiis, illo provident
            corporis!
          </p>
        </div>
        <div id={styles.contentTwo}>
          <h5>This is title 2</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            nobis earum dolor velit. Fugit pariatur voluptates magni sequi cum
            ratione. Accusamus reiciendis delectus exercitationem natus dolorem,
            consequuntur adipisci. Consectetur, alias. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Voluptatum sunt dolorum incidunt
            officia nostrum doloribus deleniti? Fuga odio quod veniam, nobis rem
            dolorem, perferendis dolorum accusamus blanditiis, illo provident
            corporis!
          </p>
        </div>
        <div id={styles.imageTwo}>
          <Image
            src="/images/about-large.png"
            alt="About"
            width={400}
            height={500}
            className="aspect-video h-full w-full"
          />
        </div>
      </div>
    </AboutAimsWrapper>
  );
};

export default AboutUs;
