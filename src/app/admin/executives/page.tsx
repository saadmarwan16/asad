import Logo from "@asad/lib/components/Logo";
import { Routes } from "@asad/lib/routes";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";
import Link from "next/link";
import { getManyExecutives } from "./queries";
import NoItems from "../_components/NoItems";

const AdminExecutiveTeam = async () => {
  const executives = await getManyExecutives();

  return (
    <div>
      <h4 className="mb-8 font-medium">Executive memebers</h4>
      {executives.length > 0 ? (
        <div id={styles.cards}>
        {executives.map((executive) => (
          <Link
            key={executive.id}
            href={Routes.ADMIN_EXECUTIVE_DETAILS(executive.id.toString())}
            className={`${styles.card} flex cursor-pointer flex-col gap-4`}
          >
            <div className={`${styles.imageContainer} aspect-[5/6]`}>
              <div className={`${styles.image}`}>
                <Image
                  src={executive.image ?? "/images/no_profile_image.jpg"}
                  alt={executive.name}
                  width={400}
                  height={700}
                  className="h-full w-full"
                />
              </div>
              <div
                className={`${styles.overlay} flex flex-col items-center justify-center gap-4 text-xl`}
              >
                <span>
                  <Logo className="w-16" />
                </span>
                <span className={styles.cta}>View more</span>
              </div>
            </div>
            <div>
              <small>{executive.role}</small>
              <h6 className="truncate font-medium">{executive.name}</h6>
            </div>
          </Link>
        ))}
      </div>
      ) : (<NoItems title="executives" buttonTitle="Add an Executive" route={Routes.ADMIN_ADD_EXECUTIVE} />)}
    </div>
  );
};

export default AdminExecutiveTeam;
