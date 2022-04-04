import styles from '../videoPreviewItem/VideoPreviewItem.module.css';
import { useRouter } from 'next/router';

export default function VideoPreviewItem({
  videoObject
}) {

  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: '/video',
      query: { videoId: videoObject.id }
    })
  };
  return (
    <div className={styles.videoWrapper} onClick={handleClick}>
      <img src={videoObject.img}></img>
      <b>{videoObject.title}</b>
      <p>{videoObject.description}</p>
    </div>
  )
}