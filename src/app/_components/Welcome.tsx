import styles from "@asad/styles/home/welcome.module.css";
import WelcomeSmallDescription from "./WelcomeSmallDescription";
import WelcomeLargeDescription from "./WelcomeLargeDescription";

const Welcome = () => {
  return (
    <>
      <section id="welcome" className="bg-base-100 pt-6 lg:hidden">
        <div id={styles.small}>
          <WelcomeSmallDescription />
          <div className={styles.svgContainer}>
            <svg
              className="h-full w-auto md:h-auto md:w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-230.4 -337.9 1551.3 1200"
            >
              <path
                fill="#FCFCFC"
                d="M1320.9-337.9H464.5c-66.1 0-128.3 55.8-175.1 102.5-46.7 46.8-72.5 108.9-72.5 175.1v81.4h-.1v211.4c0 72.1-58.7 130.7-130.8 130.7h-316.4V-338h1551.3zM283.6 1121.6V770.1h.1V558.7c0-34.9 13.6-67.8 38.3-92.4 24.7-24.7 57.5-38.3 92.4-38.3h906.4v693.6H283.6z"
              ></path>
              <path
                fill="#F2F7F7"
                d="M-230.4 333.3H56c71.7.7 129.9-57.1 130.8-130.7V-8.9h.1v-81.4c0-66.1 25.8-128.3 72.5-175.1 46.8-46.7 108.9-72.5 175.1-72.5h886.4V-221H434.5c-34.9 0-67.8 13.6-92.4 38.3-24.7 24.7-38.3 57.5-38.3 92.4v211.4h-.1v81.4c0 136.5-111.1 247.6-247.6 247.6h-286.4V333.3zM186.8 1121.6V660.1h.1v-81.4c0-66.1 25.8-128.3 72.5-175.1 46.8-46.7 108.9-72.5 175.1-72.5h886.4V448H434.5c-34.9 0-67.8 13.6-92.4 38.3-24.7 24.7-38.3 57.5-38.3 92.4v211.4h-.1v331.4H186.8z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      <section
        id="welcome"
        className="relative -z-20 hidden h-screen bg-base-100 px-5 text-2xl lg:block"
      >
        <div id={styles.large} className="fixed -mx-5 !h-full w-full">
          <WelcomeLargeDescription />
          <div>
            <svg
              viewBox="0 0 1457 944"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1457 471.673L1201.02 472.061L1057.5 633.915V944.061H1457V471.673ZM0 0.0610504H1057.5V331.056L926.357 472.03H503.017L387.98 673.132V944.061H0V0.0610504Z"
                fill="#FCFCFC"
              ></path>
              <path
                d="M869.415 540.367H658V402.85H869.415C941.501 402.85 1000.16 333.804 1000.16 248.928V0.0610504H1117V248.925C1117 409.627 1005.93 540.367 869.415 540.367ZM1114.84 943.284H998V694.418C998 616.572 1023.77 543.391 1070.52 488.337C1117.28 433.307 1179.45 402.979 1245.58 402.979H1457V540.518H1245.58C1210.66 540.518 1177.83 556.511 1153.14 585.599C1128.45 614.665 1114.84 653.313 1114.84 694.418V943.284V943.284Z"
                fill="#F2F7F7"
              ></path>
              <path
                d="M445.843 943.284H329V694.418C329 616.572 354.766 543.391 401.515 488.337C448.283 433.307 510.453 402.979 576.585 402.979H788V540.518H576.585C541.665 540.518 508.833 556.511 484.141 585.599C459.449 614.665 445.843 653.313 445.843 694.418V943.284Z"
                fill="#F2F7F7"
              ></path>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
