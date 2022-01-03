import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCurrentLocationWeather } from '../actions/currentWeatherAction';
import { geoLocation } from '../getGeoLocation';
import WeatherIcons from './weatherIcons';

export default function CurrentWeather(props) {
    const {setCityName} = props;
    const [lat, setLat] = useState([39.74362]); // default latitude is leiria
    const [lon, setLon] = useState([-8.80705]);// same for longitude
    const currentWeather = useSelector(state => state.currentWeather);
    const {loading, data, error} = currentWeather;
    const dispatch = useDispatch();


    useEffect(()=> {
        // getting user geolocation 
        geoLocation(setLat, setLon);
        dispatch(getCurrentLocationWeather(lat, lon));
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
                <div className='current-wea'>
                    <h2>{data.name}{setCityName(data.name)}</h2>
                    <WeatherIcons rangeId={data.weather[0].id}/>
                    <h1>{Math.floor(data.main.temp)}&deg;</h1>
                    <h4 className='min-max-temp'>
                        <span className='max-temp'>max {Math.floor(data.main.temp_max)}&deg;</span>
                        <span className='min-temp'>min {Math.floor(data.main.temp_min)}&deg;</span>
                    </h4>
                    <p className='brif'>{data.weather[0].description}</p>
                </div>
            )
                
            : (
                <div> </div>
            )}
        </>
        
    )
}
