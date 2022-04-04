import styles from '../../styles/AllVideo.module.css';
import VideoPreviewItem from '../../components/videoPreviewItem/VideoPreviewItem';
import { videosData } from '../../constants/videosData';
import Header from '../../components/header/Header';

export default function AllVideo() {

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