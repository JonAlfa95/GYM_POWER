import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Slider from './components/Slider';
import Public1 from './components/Public1'
import Footer from './components/Footer';
import Index from './components/Index';
import Rutinas from './components/Rutinas';
import ImageParallax from './components/ImageParallax';
import Table from './components/Table';
import Interactive from './components/Interactive'



function App() {
  return (
    <Router>
      <Navigation />
      <Slider />
      <Public1 />
      <ImageParallax />
      <Table />
      
        <Route path="/" exact  component={Index} />
        <Route path="/Rutinas" component={Rutinas} />

        <Interactive />

      <Footer />
    </Router>
  );
}

export default App;
