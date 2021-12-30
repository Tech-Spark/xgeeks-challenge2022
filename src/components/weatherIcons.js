import React, {useState, useEffect} from 'react';

export default function WeatherIcons(props) {
    const {rangeId} = props;
    const [icon, setIcon] = useState('');
 

    useEffect(() => {
        const icons = {
                Thunderstorm: "wi-thunderstorm",
                Drizzle: "wi-sleet",
                Rain: "wi-storm-showers",
                Snow: "wi-snow",
                Atmosphere: "wi-fog",
                Clear: "wi-day-sunny",
                Clouds: "wi-day-fog"
            }
        function returnIcon(){
        switch(true){
            case rangeId >=200 && rangeId <=232:
                setIcon(icons.Thunderstorm);
                break;
            case rangeId >=300 && rangeId <=321:
                setIcon(icons.Drizzle);
                break;
            case rangeId >=500 && rangeId <=531:
                setIcon(icons.Rain);
                break;
            case rangeId >=600 && rangeId <=622:
                setIcon(icons.Snow);
                break;
            case rangeId >=701 && rangeId <=781:
                setIcon(icons.Atmosphere);
                break;
            case rangeId === 800:
                setIcon(icons.Clear);
                break;
            case rangeId >=801 && rangeId <=804:
                setIcon(icons.Clouds);
                break;
            default:
                setIcon(icons.Clouds);
            }
        }
         returnIcon();
    }, [rangeId])
        
    return (
        <div>
            <i className={`wi ${icon} } icon-size`}></i>
        </div>
    )



}
