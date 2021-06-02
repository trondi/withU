import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <div className={styles.box}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3>{snippet.title}</h3>
      <h5 className={styles.title}>{snippet.channelTitle}</h5>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
  </section>
);

export default VideoDetail;
