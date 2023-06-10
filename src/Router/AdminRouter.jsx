import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';

const AdminRouter = () => {
    const {user}= useContext(AuthContext)
    const [admin,setAdmin] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:9000/users/${user?.email}`)
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default AdminRouter;