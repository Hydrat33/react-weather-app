import React, { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { usePosition } from './hooks/usePosition';
import { useFetch } from './hooks/useFetch';
import { Form, Searcher } from './components/searcher/Searcher'

export const WeatherApp = () => {
    
    const { latitude, longitude } = usePosition();

    const [url, seturl] = useState(null);
    
    

    useEffect(() => {
        seturl(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=40417ac8bbdde73fc8fe4dc13d601662`
        );
    }, [latitude,longitude]); 

    console.log(latitude, longitude)

    

    const { data, loading } = useFetch(url);

    console.log(data)

    const { weather, main, name, sys, wind, visibility } = data || '';
    
    if (loading) return <Loading />;

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-700 via-blue-400 to-grey-400'>
            
            <Searcher seturl={ seturl }/>

            <div className='w-10/12 mt-10 h-3/5 h-200 bg-white md:w-5/12 rounded-2xl p-2 opacity-60 blur-50 relative'>
                
                <header className='w-12/12 border-b-2 mt-0 text-center'>

                    <h2 className=''>
                        {name}-{sys.country}
                    </h2>
                
                </header>
                
                <main className='flex mt-5 text-center md:w-8/12 md:mt-12 md:m-auto flex-col md:items-center md:flex-row md:justify-between'>


                <span className='text-8xl md:text-9xl'>
                    {Math.round(main.temp)}°
                </span>
                

                    
                <div className='flex flex-col justify-center text-2xl md:text-3xl'>
                    <p className='flex flex-row justify-center items-center'>
                        {weather[0].description}
                        <img width='50px' src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt='icon' />
                    </p>

                    <p>
                        feels like {Math.round(main.feels_like)}° 
                    </p>
                </div>

                </main>

                <ul className='text-center text-sm md:text-xl font-bold h-28 md:h-40 absolute w-full left-0 bottom-0 rounded-2xl flex flex-row justify-between'>
            
                <li className='flex flex-col border-r-2 w-3/12' >
                    <span className='h-2/5'>
                        Pressure  
                    </span>
                    <span className='h-3/5'>
                        {main.pressure}
                    </span>
                </li>

                <li className='flex flex-col justify-evenly border-r-2 w-3/12' >
                    <span className='h-2/5'>
                        Humidity  
                    </span>
                    <span className='h-3/5'>
                        {main.humidity}%
                    </span>
                </li>

                <li className='flex flex-col justify-evenly border-r-2 w-3/12' >
                    <span className='h-2/5 font-xs'>
                        Wind  
                    </span>
                    <span className='h-3/5'>
                        {wind.speed}km/h
                    </span>
                </li>

                <li className='flex flex-col justify-evenly border-r-2 w-3/12' >
                    <span className='h-2/5'>
                          Visibility
                    </span>
                    <span className='h-3/5'>
                        {(visibility).toString().slice(0,-2)}%
                    </span>
                </li>
            

                </ul>


            </div>
        </div>
    );
};
