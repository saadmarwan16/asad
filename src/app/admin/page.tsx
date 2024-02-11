import Logo from "@asad/lib/components/Logo";
import { dashbaord } from "@asad/lib/data/admin/dashboard";
import styles from "@asad/styles/shared/executivepresidentactivities.module.css";
import Image from "next/image";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div>
      <h4 className="mb-8 font-medium">Welcome back! Marwan</h4>
      <div id={styles.cards}>
        {dashbaord.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className={`${styles.card} flex cursor-pointer flex-col gap-4`}
          >
            <div className={`${styles.imageContainer} aspect-square`}>
              <div className={`${styles.image}`}>
                <Image
                  src={item.image}
                  alt={item.title}
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
                <span className={styles.cta}>{item.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
