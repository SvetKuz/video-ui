
import styles from '../../styles/Video.module.css';
import VideoPreviewItem from '../../components/videoPreviewItem/VideoPreviewItem';
import { videosData } from '../../constants/videosData';
import Header from '../../components/header/Header';
import Comment from '../../components/comment/Comment';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Video() {
  const router = useRouter();
  const videoId = router.query.videoId;

  const [video, setVideo] = useState();
  const [related, setRelated] = useState();
  const [showComment, setShowComment] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const isLoggedIn =  localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/')
    }
  }, []);

  useEffect(() => {
    const video = videosData.find((item) => {
      return item.id === videoId
    });

    const related = videosData.filter((item) => {
      return item.playlist === video?.playlist && item.id !== video.id
    })

    setVideo(video);
    setRelated(related);
  }, [router]);

  const handleToggle = () => {
    setShowComment(!showComment);
  }

  const handleAddComment = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    if (form.comment.value) {
      const text = form.comment.value;
      setComments((prevState) => {
        return [...prevState, text]
      })
      form.comment.value = "";
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.colContainer}>
        <Header withBackArrow={true}></Header>
        <div className={styles.rowWrapper}>
          <div className={styles.colVideoContainer}>
            <div className={styles.videoWrapper}>
              {video && (
                <video controls>
                  <source src={video.link}></source>
                </video>
              )}
              <div className={styles.videoTitle}>
                <b>{video?.title}</b>
              </div>
              <div className={styles.videoTitle}>
                <p>{video?.author}</p>
                <i>{video?.description}</i>
              </div>
            </div>
            <div className={styles.videosWrapperMobile}>
              {related && related.map((video) => {
                return <VideoPreviewItem
                  key={`${video.id}-mobile`}
                  videoObject={video}
                ></VideoPreviewItem>
              })}
            </div>
            <div className={styles.commentsWrapper}>
              <div className={styles.commentsTitle}>
                <p>comments</p>
                <div className={styles.commentButtom} onClick={handleToggle}>{showComment ? 'hide' : 'show'}</div>
              </div>
              {showComment && (
                <div className={styles.commentsSectionWrapper}>
                  <form className={styles.addComment} onSubmit={handleAddComment}>
                    <div className={styles.inputWrapper}>
                      <input type='text' id="comment" placeholder='Your comment'></input>
                    </div>
                    <div className={styles.buttonWrapper}>
                      <button type='submit'>Add</button>
                    </div>
                  </form>
                  <div className={styles.colCommentsContainer}>
                    {comments.map((item) => {
                      return <Comment key={Math.random()} text={item}></Comment>
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.videosWrapper}>
            {related && related.map((video) => {
              return <VideoPreviewItem
                key={`${video.id}-desktop`}
                videoObject={video}
              ></VideoPreviewItem>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}