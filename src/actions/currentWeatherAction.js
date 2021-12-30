import Axios from 'axios';
import api_keys from '../api_keys';
import { 
    CURRENT_WEATHER_LOCATION_FAIL, 
    CURRENT_WEATHER_LOCATION_REQUEST, 
    CURRENT_WEATHER_LOCATION_SUCCESS, } from '../constants/weatherConstant';


//get current weather from openWeatherMap api.
export const getCurrentLocationWeather = (lat, lon) => async (dispatch) => {
    dispatch({type: CURRENT_WEATHER_LOCATION_REQUEST, payload:{lat, lon} });
    
    try{
        const {data} = await Axios.get(`${api_keys.base}weather?lat=${lat}&lon=${lon}&appid=${api_keys.key}`);
        dispatch({type: CURRENT_WEATHER_LOCATION_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: CURRENT_WEATHER_LOCATION_FAIL, payload: error.message});
    }
}