import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const useAdmin = () => {
    const {loading,user}= useContext(AuthContext)
    const [admin,setAdmin]= useState(false)
    

    if(loading){
        return <Loading/>
    }
    
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