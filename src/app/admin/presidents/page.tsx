import Logo from "@asad/lib/components/Logo";
import { Routes } from "@asad/lib/routes";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";
import Link from "next/link";
import { getManyPresidents } from "./queries";

const AdminPresident = async () => {
  const presidents = await getManyPresidents();

  return (
    <div>
      <h4 className="mb-8 font-medium">Presidents</h4>
      <div id={styles.cards}>
        {presidents.map((president) => (
          <Link
            key={president.id}
            href={Routes.ADMIN_PRESIDENT_DETAILS(president.id.toString())}
            className={`${styles.card} flex cursor-pointer flex-col gap-4`}
          >
            <div className={`${styles.imageContainer} aspect-[5/6]`}>
              <div className={`${styles.image}`}>
                <Image
                  src={president.image ?? "/images/no_profile_image.jpg"}
                  alt={president.name}
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
              <small>
                From{" "}
                <span className="small !font-medium">{president.from}</span> to{" "}
                <span className="small !font-medium">{president.to}</span>
              </small>
              <h6 className="truncate font-medium">{president.name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminPresident;
