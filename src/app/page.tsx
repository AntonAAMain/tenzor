import { AboutUs } from "@/components/widgets/AboutUs/AboutUs";
import { Catalog } from "@/components/widgets/Catalog/Catalog";
import { Main } from "@/components/widgets/Main/Main";

import styles from "./page.module.css";
import { Reviews } from "@/components/widgets/AboutUs/Reviews/Reviews";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <Catalog />
      <AboutUs />
    </main>
  );
}
