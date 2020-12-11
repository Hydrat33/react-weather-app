import React from 'react'
import { useForm } from '../../hooks/useForm';

export const Searcher = ({ seturl }) => {

    const [{ search }, handleOnChange,reset]= useForm({
        search:''
    })

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        console.log(search)

        seturl(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=40417ac8bbdde73fc8fe4dc13d601662`
        );
        
        reset()
    };

    return (
        <div>

            <form onSubmit={handleSubmit} className='w-50 h-7 md:w-72 md:h-8 outline-none'>

                <input
                    className='shadow-lg text-green rounded-3xl w-full h-full outline-none text-center'
                    type='search'
                    name='search'
                    onChange={handleOnChange}
                    value={search}
                    autoComplete='off'
                    placeholder='Enter your city'
                ></input>

            </form>

        </div>
    )
}
