import Axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, options = {}) => {
    
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
       
        if(url){

            Axios.get(url).then((resp) => {
                if (resp.statusText === 'OK') {
                    setstate({
                        error: null,
                        data: resp.data,
                        loading: false,
                    });
                } else {
                    console.log('object');
                }
            });
            
        }
        }, [url]);
        
    return state;
};
