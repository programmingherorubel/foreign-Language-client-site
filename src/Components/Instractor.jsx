import React from 'react';
import { useInstrator } from '../Hook/useInstractor';
import Loading from './Loading';

const Instractor = () => {
    const [ourInstractor,instractorLoading] = useInstrator()

    if(instractorLoading){
        return <Loading/>
    }

    return (
        <div>
            
        </div>
    );
};

export default Instractor;