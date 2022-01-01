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

    console.log(data);
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
                    <div>
                        <h1>{cityName} City Current Weather!</h1>
                        <div>
                            <h1>{cityName}  ({country})</h1>
                            <WeatherIcons rangeId={data.current.weather[0].id}/>
                            <h1>{Math.floor(data.current.temp)}&deg;</h1>
                            <h3 className='min-max-temp'>
                                <span className='max-temp'>max {Math.floor(data.daily[0].temp.max)}&deg;</span>
                                <span className='min-temp'>min {Math.floor(data.daily[0].temp.min)}&deg;</span>
                            </h3>
                            <p className='brif'>{data.current.weather[0].description}</p>
                        </div>
                    </div>
                    <div>
                        <h2>{cityName} City Weather forecast for next 7 days:</h2>
                        <ul className='weekly-forecast'>
                        {data.daily.slice(1).map((day, index)=> (
                          <li key={index}>
                              <h3>{moment.unix(day.dt).format("dddd")}</h3>
                              <div>
                                  <span>max {day.temp.max.toFixed(0)}&deg;</span>
                                  <span>min {day.temp.min.toFixed(0)}&deg;</span>
                              </div>
                              <div>
                                  <WeatherForecastIcons rangeId={day.weather[0].id}/>
                              </div>
                              <div>
                                  <span>{day.weather[0].description}</span>
                              </div>
                              <div>
                                  <p>Sunrise</p>
                                  <span> {moment.unix(day.sunrise).format("LT")}</span>
                                  
                              </div>
                              <div>
                                  <p>Sunset</p>
                                  <span>{moment.unix(day.sunset).format("LT")}</span>
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
