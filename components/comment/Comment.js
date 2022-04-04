import styles from '../comment/Comment.module.css';

export default function Comment({ text }) {

  return (
    <div className={styles.commentWrapper}>
      <b>Unknown Author</b>
      <p>{text}</p>
    </div>
  )
}