import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const useTeachers = () => {
    const {loading,user}= useContext(AuthContext)
    const [teachers,setTeachers]= useState(false)

    if(loading){
        return <Loading/>
    }
    
    
    useEffect(()=>{
        fetch(`https://project12server-programmingherorubel.vercel.app/instractor/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setTeachers(data.instractor)
          
        })
    },[user?.email])


    return [teachers]
};

export default useTeachers;