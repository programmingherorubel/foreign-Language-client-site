import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useTeachers = () => {
    const {loading,user}= useContext(AuthContext)
    const [teachers,setTeachers]= useState(false)
    
    
    useEffect(()=>{
        fetch(`http://localhost:9000/instractor/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setTeachers(data.instractor)
          
        })
    },[user?.email])


    return [teachers]
};

export default useTeachers;