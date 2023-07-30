import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Link data-testid="homelink" href="/">
          Photo Albums
        </Link>
      </div>
    </div>
  );
};

export default Header;
