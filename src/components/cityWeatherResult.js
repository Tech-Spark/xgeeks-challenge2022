import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCityWeather } from '../actions/cityWeatherActions';
import moment from 'moment-timezone';
import WeatherForecastIcons from './weatherForecastIcons';
import WeatherIcons from './weatherIcons';

export default function CityWeatherResult(props) {
    const {selectedCity} = props;
    const cityName = selectedCity.name;
    const country = selectedCity.country;
    const {lat, lon} = selectedCity.coord;
    const cityWeather = useSelector(state => state.cityWeather);
    const {loading, data, error} = cityWeather;
    const dispatch = useDispatch();


    useEffect(()=> {
        dispatch(getCityWeather(lat, lon));
    }, [dispatch, lat, lon]);
    
     
    return (
       <>
            {loading ? (
                <p>Loading...</p>
            )
            : error ? (
                <p>{error.message}</p>
            )
            : typeof data != 'undefined'? (
                <div className='city-current-forecast'>
                    <div className='current-wea'>
                        <h2>{cityName} City Current Weather!</h2>
                        <div>
                            <h2>{cityName}  ({country})</h2>
                            <WeatherIcons rangeId={data.current.weather[0].id}/>
                            <h1>{Math.floor(data.current.temp)}&deg;</h1>
                            <h4 className='min-max-temp'>
                                <span className='max-temp'>max {Math.floor(data.daily[0].temp.max)}&deg;</span>
                                <span className='min-temp'>min {Math.floor(data.daily[0].temp.min)}&deg;</span>
                            </h4>
                            <p className='brif'>{data.current.weather[0].description}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='city-name'>{cityName} Weather forecast for next 7 days:</h2>
                        <ul className='weekly-forecast'>
                        {data.daily.slice(1).map((day, index)=> (
                          <li key={index}>
                              <h3>{moment.unix(day.dt).format("dddd")}</h3>
                              <div className='forecast-min-max'>
                                  <span>max {day.temp.max.toFixed(0)}&deg;</span>
                                  <span>min {day.temp.min.toFixed(0)}&deg;</span>
                              </div>
                              <div className='forecast-icon'>
                                  <WeatherForecastIcons rangeId={day.weather[0].id}/>
                              </div>
                              <div>
                                  <span className='forecast-des'>{day.weather[0].description}</span>
                              </div>
                              <div className='forecast-sun'>
                                    <div>
                                        <p>Sunrise</p>
                                        <span> {moment.unix(day.sunrise).format("LT")}</span>
                                    </div>
                                    <div>
                                        <p>Sunset</p>
                                        <span>{moment.unix(day.sunset).format("LT")}</span>
                                    </div>
                              </div>
                          </li>  
                        )
                        )}
                        </ul>
                    </div>
                </div>
            )  
            : (
                <div> </div>
            )}
        </>
    )
}
