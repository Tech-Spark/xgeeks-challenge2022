import {applyMiddleware, 
        createStore, 
        compose, 
        combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { cityWeatherReducer } from './reducers/cityWeatherReducers';
import { currentWeatherForecastReducer, currentWeatherReducer } from './reducers/currentLocationReducers';


const initialState = {

};


const reducer = combineReducers({
    currentWeather: currentWeatherReducer,
    currentWeatherForecast: currentWeatherForecastReducer,
    cityWeather: cityWeatherReducer,
    
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)

export default store;