import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import apiConfig from '../../api/apiConfig';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './hero-slide.scss';
import '../Button/button.scss';
import Button, { OutlineButton } from '../Button/Button';
import Modal, { ModalContent } from '../Modal/index.jsx';

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const params = { page: 1 };
        const reponse = await tmdbApi.getMovieList(movieType.popular, {
          params,
        });
        setMovieItems(reponse.results.splice(0, 4));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index} className="mySwiper">
            {({ isActive }) => <HeroSlideItem item={item} className={isActive ? 'active' : ''} />}
          </SwiperSlide>
        ))}
      </Swiper>

      {movieItems.map((item, index) => (
        <TrailerModal item={item} key={index} />
      ))}
    </div>
  );
};

const HeroSlideItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.posters_path);

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);
    if (videos.results.length > 0) {
      const videoSrc = `https://www.youtube.com/embed/${videos.results[0].key}`;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No Trailer';
    }

    modal.classList.toggle('active');
  };

  return (
    <div className={`hero-slide__item ${props.className}`} style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate(`/movie/ + ${item.id}`)}>Watch Now</Button>
            <OutlineButton onClick={setModalActive}>Watch Trailer</OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const { item } = props;

  const iframeRef = useRef(null);

  const onClose = () => {
    iframeRef.current.setAttribute('src', '');
  };

  return (
    <Modal id={`modal_${item.id}`}>
      <ModalContent active={false} onClose={onClose}>
        <iframe ref={iframeRef} width="100%" height="500px" title="traile"></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
