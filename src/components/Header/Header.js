import Image from "next/image";
import styles from "./Header.module.scss";
import { FaSistrix } from "react-icons/fa";

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
      <div className={styles.search}>
        <input type="text"></input>
        <button>
          <FaSistrix />
        </button>
      </div>
    </header>
  );
};

export default Header;
