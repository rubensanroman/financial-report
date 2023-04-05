import Image from 'next/image'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles.logo}>
        <Image
          alt="Financial Report"
          height={100}
          src="/icon-finances.png"
          width={100}
        />
        <div id="styles.title">
          <h1>Financial Report</h1>
          <p>Streamline your finances effortlessly.</p>
        </div>
      </div>
    </header>
  )
}

export default Header;
