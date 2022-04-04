import styles from '../styles/Auth.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Auth() {

  const router = useRouter();
  const [err, setErr] = useState();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    setTimeout(() => {
      if (form.login.value === 'myLogin' && form.password.value === 'myPassw0rd') {
        router.push('/all-video')
      } else {
        setErr(true)
      }
    }, 2000)
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.formColumn}>
          <form onSubmit={handleSubmit}>
            <div className={styles.rowInput}>
              <input type="text" id="login" placeholder="Login" onChange={() => setErr(false)}></input>
            </div>
            <div className={styles.rowInput}>
              <input type="password" id="password" placeholder="Password" onChange={() => setErr(false)}></input>
            </div>
            <div className={styles.rowButton}>
              <button type='submit'>log in</button>
            </div>
          </form>
        </div>
      </div>
      {err && (
        <div className={styles.errorMessage}>Login or password is invalid</div>
      )}
    </div>
  )
}
