import React, {useState} from 'react'
import CurrentForcast from './currentForcast'
import CurrentWeather from './currentWeather'

export default function CurrentLocationWeather() {
    const [cityName, setCityName] = useState('');

    return (
        <div>
            <CurrentWeather setCityName={setCityName}/>
            <CurrentForcast cityName={cityName}/>
        </div>
    )
}
