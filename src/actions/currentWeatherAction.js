import Axios from 'axios';
import api_keys from '../api_keys';
import { 
    CURRENT_LOCATION_FORECAST_FAIL,
    CURRENT_LOCATION_FORECAST_REQUEST,
    CURRENT_LOCATION_FORECAST_SUCCESS,
    CURRENT_WEATHER_LOCATION_FAIL, 
    CURRENT_WEATHER_LOCATION_REQUEST, 
    CURRENT_WEATHER_LOCATION_SUCCESS, } from '../constants/weatherConstant';


//get current weather from openWeatherMap api.
export const getCurrentLocationWeather = (lat, lon) => async (dispatch) => {
    dispatch({type: CURRENT_WEATHER_LOCATION_REQUEST, payload:{lat, lon} });
    
    try{
        const {data} = await Axios.get(`${api_keys.base}weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_keys.key}`);
        dispatch({type: CURRENT_WEATHER_LOCATION_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: CURRENT_WEATHER_LOCATION_FAIL, payload: error.message});
    }
}

// get current location weather forecast
export const getCurrentLocationWeatherForecast = (lat, lon) => async (dispatch) => {
    dispatch({type: CURRENT_LOCATION_FORECAST_REQUEST, payload:{lat, lon} });
    
    try{
        const {data} = await Axios.get(`${api_keys.base}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_keys.key}&exclude=minutely`);
        dispatch({type: CURRENT_LOCATION_FORECAST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: CURRENT_LOCATION_FORECAST_FAIL, payload: error.message});
    }
}