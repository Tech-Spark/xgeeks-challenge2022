import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import moment from 'moment-timezone';
import { getCurrentLocationWeatherForecast } from '../actions/currentWeatherAction';
import { geoLocation } from '../getGeoLocation';
import WeatherForecastIcons from './weatherForecastIcons';



export default function CurrentForcast() {
    const [lat, setLat] = useState([39.74362]); // default latitude is leiria
    const [lon, setLon] = useState([-8.80705]);// same for longitude
    const currentWeatherForecast = useSelector(state => state.currentWeatherForecast);
    const {loading, data, error} = currentWeatherForecast;
    const dispatch = useDispatch();



    useEffect(()=> {
        // checking user geolocation is on or off
        geoLocation(setLat, setLon);
        dispatch(getCurrentLocationWeatherForecast(lat, lon));
    }, [dispatch, lat, lon,]);




    return (
        <>
            {loading ? (
                <p>Loading...</p>
            )
            : error ? (
                <p>{error.message}</p>
            )
            : typeof data != 'undefined'? (
                    <div>
                        <h2>Weather forecast for next 7 days:</h2>
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
            )  
            : (
                <div> </div>
            )}
        </>
    )
}
