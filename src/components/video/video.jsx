import { useCallback, useEffect, useState } from 'react';
import styles from './video.module.css';
import SearchHeader from './search_header';
import VideoDetail from './video_detail';
import VideoList from './video_list';

const Video = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .searchTraining() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  );
};

export default Video;
