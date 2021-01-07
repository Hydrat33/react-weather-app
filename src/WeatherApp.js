import React, { useEffect, useState } from 'react';
import { Loading } from './components/Loading';
import { usePosition } from './hooks/usePosition';
import { useFetch } from './hooks/useFetch';
import { Searcher } from './components/searcher/Searcher';

export const WeatherApp = () => {
    const { latitude, longitude } = usePosition();

    const [url, seturl] = useState(null);

    useEffect(() => {
        seturl(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=40417ac8bbdde73fc8fe4dc13d601662`
        );
    }, [latitude, longitude]);

    const { data, loading } = useFetch(url);

    const { weather, main, name, sys, wind, visibility } = data || '';

    if (loading) return <Loading />;

    return (
        <div className='flex flex-col justify-center items-center h-screen bg-gradient-to-br from-blue-700 via-blue-400 to-grey-400 backdrop-blur'>
            <Searcher seturl={seturl} />

            <div className='w-10/12 mt-10 h-3/5 h-200 shadow-xl bg-white sm:w-5/12 rounded-2xl p-2 bg-opacity-20 blur-50 relative text-gray-700 bg-clip-padding'>
                <header className='w-12/12 border-b border-gray-700 border-opacity-30 mt-0 text-center'>
                    <h2>
                        {name}-{sys.country}
                    </h2>
                </header>

                <main className='flex mt-5 text-center flex-col sm:items-center sm:flex-row sm:justify-evenly sm:w-full sm:'>
                    <span className='text-8xl sm:text-9xl'>
                        {Math.round(main.temp)}°
                    </span>

                    <div className='flex flex-col justify-center text-2xl sm:text-3xl'>
                        <p className='flex flex-row justify-center items-center'>
                            {weather[0].description}
                            <img
                                width='50px'
                                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                alt='icon'
                            />
                        </p>

                        <p>feels like {Math.round(main.feels_like)}°</p>
                    </div>
                </main>

                <ul className='text-center text-sm sm:text-xl h-28 absolute w-full left-0 bottom-0 rounded-2xl flex flex-row justify-between sm:h-32'>
                    <li className='flex flex-col border-opacity-30  border-r-2 border-gray-400 w-3/12'>
                        <span className='h-2/5'>Pressure</span>
                        <span className='h-3/5'>{main.pressure}</span>
                    </li>

                    <li className='flex flex-col border-opacity-30  justify-evenly border-gray-400 border-r-2 w-3/12'>
                        <span className='h-2/5'>Humidity</span>
                        <span className='h-3/5'>{main.humidity}%</span>
                    </li>

                    <li className='flex flex-col border-opacity-30  justify-evenly border-gray-400 border-r-2 w-3/12'>
                        <span className='h-2/5 font-xs'>Wind</span>
                        <span className='h-3/5'>{wind.speed}km/h</span>
                    </li>

                    <li className='flex border-opacity-30  flex-col justify-evenly w-3/12'>
                        <span className='h-2/5'>Visibility</span>
                        <span className='h-3/5'>
                            {visibility.toString().slice(0, -2)}%
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
