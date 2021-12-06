import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import CataLog from '../pages/CataLog';
import Details from '../pages/Details/Details';
import Home from '../pages/Home';

const ConfigRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:category/search/:keyword" element={<CataLog />} />
        <Route path="/:category/:id" element={<Details />} />
        <Route path="/:category" element={<CataLog />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default ConfigRouter;
