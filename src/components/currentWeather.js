import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getCurrentLocationWeather } from '../actions/currentWeatherAction';
import WeatherIcons from './weatherIcons';

export default function CurrentWeather(props) {
    const [lat, setLat] = useState([39.74362]); // default latitude is leiria
    const [lon, setLon] = useState([-8.80705]);// same for longitude
    const currentWeather = useSelector(state => state.currentWeather);
    const {loading, data, error} = currentWeather;
    const dispatch = useDispatch();


    useEffect(()=> {
        // checking user geolocation is on or off
        if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
        }
        dispatch(getCurrentLocationWeather(lat, lon));
    }, [dispatch, lat, lon,]);

    // converting kelvin to celsius
    const calCelsius = (temp) => {
        let cell = Math.floor(temp - 273.15);
        return cell
    }
   

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
                    <h1>{data.name}</h1>
                    <WeatherIcons rangeId={data.weather[0].id}/>
                    <h1>{calCelsius(data.main.temp)}&deg;</h1>
                    <h3 className='min-max-temp'>
                        <span className='max-temp'>H {calCelsius(data.main.temp_max)}&deg;</span>
                        <span className='min-temp'>L {calCelsius(data.main.temp_min)}&deg;</span>
                    </h3>
                    <p className='brif'>{data.weather[0].description}</p>
                </div>
            )
                
            : (
                <div> </div>
            )}
        </>
        
    )
}
