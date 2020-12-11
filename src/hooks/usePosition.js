const { useEffect, useState } = require("react");

export const usePosition=()=>{

    const [coords, setCoords] = useState({
        latitude: 46,
        longitude: 78,
    });
    
    useEffect(() => {
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            setCoords({
                latitude,
                longitude,
            });
            
            }; 
            
            function error() {
                console.log('you can activate tracking');
            }
            
            navigator.geolocation.getCurrentPosition(success, error, {
                enableHighAccuracy: true,
            });
        }, [coords.latitude, coords.longitude]);


        return {
            latitude:coords.latitude,
            longitude:coords.longitude
        }
    }