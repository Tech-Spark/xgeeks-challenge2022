import Axios from 'axios';
import api_keys from '../api_keys';

import { CITY_WEATHER_FAIL, CITY_WEATHER_REQUEST, CITY_WEATHER_SUCCESS } from "../constants/weatherConstant";

// get city selected city weather data from openweathermap one call api
export const getCityWeather = (lat, lon) => async (dispatch) => {
    dispatch({type: CITY_WEATHER_REQUEST, payload:{lat, lon} });
    
    try{
        const {data} = await Axios.get(`${api_keys.base}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_keys.key}&exclude=minutely`);
        dispatch({type: CITY_WEATHER_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: CITY_WEATHER_FAIL, payload: error.message});
    }
}