import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../../../api/tmdbApi';

const VideoList = (props) => {
  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async function getDetail() {
      const reponse = await tmdbApi.getVideos(category, props.id);
      setVideos(reponse.results.splice(0, 5));
    })();
  }, [category, props.id]);
  return (
    <>
      {videos.map((video, index) => (
        <Video key={index} video={video} />
      ))}
    </>
  );
};

const Video = ({ video }) => {
  const iframeRef = useRef(null);
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
    iframeRef.current.setAttribute('height', height);
  }, []);
  return (
    <div className="video">
      <div className="video__title">
        <h2>{video.name}</h2>
      </div>
      <iframe
        src={`https://www.youtube.com/embed/${video.key}`}
        width="100%"
        ref={iframeRef}
        title="video"
      ></iframe>
    </div>
  );
};

export default VideoList;
