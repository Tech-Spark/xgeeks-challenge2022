import React, { useState, useEffect} from 'react';

import {BrowserRouter} from 'react-router-dom';
import './App.css';
import 'weather-icons/css/weather-icons.css';
import Header from './components/header.js';
import CurrentLocationWeather from './components/currentLocationWeather';
import SearchCityWeather from './components/searchCityWeather';


function App() {
  



  return (
    <BrowserRouter>
      <div className='grid-container'>
          <div className="header">
              <Header/>
          </div>
          <div className="main">
                  <CurrentLocationWeather/>
                  <SearchCityWeather/>
          </div>
          <div className="footer">
             <p>weatherapp@copyRight2022.</p>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
