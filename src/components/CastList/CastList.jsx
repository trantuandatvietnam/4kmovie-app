import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    (async function getCasts() {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.splice(0, 5));
    })();
  }, [category, props.id]);
  return (
    <div className="casts">
      {casts.map((cast, index) => (
        <div className="casts__item" key={index}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{cast.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
