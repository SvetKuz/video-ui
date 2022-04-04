import styles from '../../styles/AllVideo.module.css';
import VideoPreviewItem from '../../components/videoPreviewItem/VideoPreviewItem';
import { videosData } from '../../constants/videosData';
import Header from '../../components/header/Header';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AllVideo() {

  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/')
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.colContainer}>
        <Header></Header>
        <div className={styles.videosRow}>
          {videosData.map((video) => {
            return <VideoPreviewItem
              key={video.id}
              videoObject={video}
            ></VideoPreviewItem>
          })}
        </div>
      </div>
    </div>
  )
}