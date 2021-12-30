import React from 'react'
import CurrentForcast from './currentForcast'
import CurrentWeather from './currentWeather'

export default function CurrentLocationWeather() {
    return (
        <div>
            <CurrentWeather/>
            <CurrentForcast/>
        </div>
    )
}
