import styles from '../header/Header.module.css';
import Link from 'next/link';

export default function Header({ withBackArrow }) {

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.rowHeader}>
        <div className={styles.arrow}>
          {withBackArrow && (
            <Link href='/all-video'>
              <p>{'<'}</p>
            </Link>
          )}
        </div>
        <div className={styles.logo}>
          <h1>video ui</h1>
        </div>
        <div className={styles.exit}>
          <Link href='/'><p>Exit</p></Link>
        </div>
      </div>
    </div>
  )
}