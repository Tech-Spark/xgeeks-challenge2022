import { 
    CURRENT_WEATHER_LOCATION_FAIL, 
    CURRENT_WEATHER_LOCATION_REQUEST, 
    CURRENT_WEATHER_LOCATION_SUCCESS } from "../constants/weatherConstant";



export const currentWeatherReducer = (state = {}, action) => {
    switch(action.type){
        case CURRENT_WEATHER_LOCATION_REQUEST:
            return { loading: true};
        case CURRENT_WEATHER_LOCATION_SUCCESS:
            return { loading: false, data: action.payload};
        case CURRENT_WEATHER_LOCATION_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}
