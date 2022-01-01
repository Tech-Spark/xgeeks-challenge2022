export const geoLocation = (setLat, setLon) => {
    
         if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        });
        }
    }
