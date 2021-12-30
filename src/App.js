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
              <div className='main-wraper'>
                  <CurrentLocationWeather/>
                  <SearchCityWeather/>
              </div>
          </div>
          <div className="footer">
            HEY
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
