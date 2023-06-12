import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useAdmin = () => {
    const {loading,user}= useContext(AuthContext)
    const [admin,setAdmin]= useState(false)
    
    
    useEffect(()=>{
        fetch(`https://project12server-programmingherorubel.vercel.app/admin/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
          
        })
    },[user?.email])


    return [admin]
};

export default useAdmin;