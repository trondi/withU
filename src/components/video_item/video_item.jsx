import React from 'react';
import styles from './video_item.module.css';

const VideoItem = (props) => (
  <div className={styles.content}>
    <li className={styles.video}>
      <img className={styles.thumbnail} src={props.video.snippet.thumbnails.medium.url} alt="thumbnail" />
      <div className={styles.metadata}>
        <p className={styles.title}> {props.video.snippet.title} </p>
        <p className={styles.channeltitle}> {props.video.snippet.channelTitle} </p>
      </div>
    </li>
  </div>
);

export default VideoItem;
