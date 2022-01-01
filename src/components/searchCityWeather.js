import React, {useState} from 'react'
import cities from "../lib/city.list.json";
import {Link} from 'react-router-dom';
import CityWeatherResult from './cityWeatherResult';


export default function SearchCityWeather(props) {
    const [query, setQuery] = useState('');
    const [results, setResult] = useState([]);
    const [selectedCity, setSelectedCity] = useState({});
    const [showWeather,  setShowWeather]=useState(false);

    const getCity = (city) => {
        setSelectedCity(city);
         setShowWeather(true);
    }
    const onChange = (e) => {
        const {value} = e.target;
        setQuery(value);

        let matchingCities = [];
        if(value.length > 3 ){
            for (let city of cities) {
                if(matchingCities.length >= 5) {
                    return;
                }
            const match = city.name.toLowerCase().startsWith(value.toLowerCase());
                if(match) {
                    matchingCities.push(city);
                }
                setResult(matchingCities);
            }
        } 
    }


    return (
        <div>
            <div className='city-search-container'>
                <h1>Get the city weather you want to know!</h1>
                <div>
                    <label htmlFor="city">Select a city</label>
                </div>
                <input type="text" name='city' value={query} onChange={onChange}/>
                <div className='cities-div'>
                  {
                    query.length > 3 && (
                        <ul>
                            {results.length > 0 ? (
                                results.map((city, index) => (
                                    <li key={index}>
                                        <Link to='#' onClick={()=> getCity(city)}>
                                        {city.name}{city.state? `${city.state}` : ''} 
                                        <span>({city.country})</span>
                                        </Link>
                                    </li>
                                ))
                             )
                             : (
                                <li>No results..</li>
                                )
                            }
                        </ul>
                        )
                  }
                </div>
            </div>
            {
                showWeather ? <CityWeatherResult selectedCity={selectedCity}/>: ''
            }
            
        </div>
    )
}
