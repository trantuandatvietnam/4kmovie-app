import React from 'react';
import { useParams } from 'react-router';
import PageHeader from '../components/PageHeader/PageHeader';
import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid/MovieGrid';
const CataLog = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <>
      <PageHeader>{cate.movie === category ? 'Movies' : 'TV Series'}</PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default CataLog;
