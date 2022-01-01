import { CITY_WEATHER_FAIL, CITY_WEATHER_REQUEST, CITY_WEATHER_SUCCESS } from "../constants/weatherConstant";

// city weather reducer
export const cityWeatherReducer = (state = {}, action) => {
    switch(action.type){
        case CITY_WEATHER_REQUEST:
            return { loading: true};
        case CITY_WEATHER_SUCCESS:
            return { loading: false, data: action.payload};
        case CITY_WEATHER_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}