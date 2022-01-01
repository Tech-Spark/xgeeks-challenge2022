import { 
    CURRENT_LOCATION_FORECAST_FAIL,
    CURRENT_LOCATION_FORECAST_REQUEST,
    CURRENT_LOCATION_FORECAST_SUCCESS,
    CURRENT_WEATHER_LOCATION_FAIL, 
    CURRENT_WEATHER_LOCATION_REQUEST, 
    CURRENT_WEATHER_LOCATION_SUCCESS } from "../constants/weatherConstant";


// current weather reducer
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

// current weather forecast reducer

export const currentWeatherForecastReducer = (state = {}, action) => {
    switch(action.type){
        case CURRENT_LOCATION_FORECAST_REQUEST:
            return { loading: true};
        case CURRENT_LOCATION_FORECAST_SUCCESS:
            return { loading: false, data: action.payload};
        case CURRENT_LOCATION_FORECAST_FAIL:
            return { loading: false, error: action.payload};
        default: 
        return state;
    }
}
