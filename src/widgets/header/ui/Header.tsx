import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/shared/config/navigation";

import styles from "./Header.module.scss";
import { AuthModal } from "@/features/auth/ui/AuthModal";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src="/logo_eng.png"
            alt="NOZO School"
            width={250}
            height={52}
            priority
          />
        </Link>

        <nav className={styles.navigation}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.key}
            </Link>
          ))}
        </nav>

        <AuthModal />
      </div>
    </header>
  );
}
