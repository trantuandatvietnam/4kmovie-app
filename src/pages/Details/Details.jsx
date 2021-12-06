import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './Details.scss';
import CastList from '../../components/CastList/CastList';
import VideoList from './components/VideoList/VideoList';
import MovieList from '../../components/MovieList/MovieList';

const Details = (props) => {
  const { category, id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    (async function getDetail() {
      const reponse = await tmdbApi.detail(category, id, { params: {} });
      setItem(reponse);
      window.scrollTo(0, 0);
    })();
  }, [category, id]);
  console.log('item', item);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              ></div>
            </div>

            <div className="movie-content__info">
              <h1 className="title">{item.title || item.name}</h1>
              <div className="genres">
                {item.genres &&
                  item.genres.slice(0, 5).map((genre, index) => (
                    <span className="genres__item" key={index}>
                      {genre.name}
                    </span>
                  ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Cast</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>

          <div className="container">
            <div className="section mb-3">
              <VideoList id={item.id} />
            </div>

            <div className="section mb-3">
              <MovieList id={item.id} category={category} type="similar" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
