import Image from "next/image";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles.logo}>
        <div className={styles.logoWrapper}>
          <Image alt="Wealth Chimp" height={80} src="/logo.png" width={80} />
        </div>
        <div id="styles.title">
          <h1>Wealth Chimp</h1>
          <p>Streamline your finances effortlessly.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
