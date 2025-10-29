import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Product from './components/Product';
import Footer from './components/Footer';
import RealTime from './components/RealTime';
import SaveCost from './components/SaveCost';
import UseAnytime from './components/UseAnytime';
import Services from './components/Services';
import Plan from './components/Plan';
import Wishers from './components/Wishers';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Product />
      <RealTime />
      <SaveCost />
      <UseAnytime />
      <Services />
      <Plan />
      <Wishers />
      <Footer />
    </div>
  );
};

export default App;