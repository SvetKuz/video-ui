import styles from '../header/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ withBackArrow }) {
  const router = useRouter()

  const handleExit = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.rowHeader}>
        <div className={styles.arrow}>
          {withBackArrow && (
            <Link passHref href='/all-video'>
              <p>{'<'}</p>
            </Link>
          )}
        </div>
        <div className={styles.logo}>
          <Link passHref href='/all-video'>
            <h1>video ui</h1>
          </Link>
        </div>
        <div className={styles.exit}>
          <p onClick={handleExit}>Exit</p>
        </div>
      </div>
    </div>
  )
}