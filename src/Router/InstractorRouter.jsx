import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useTeachers from '../Hook/useTeachers';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const InstractorRouter = () => {
    const {user,loading} = useContext(AuthContext)
    const [teachers] = useTeachers()
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(user?.email && teachers){
        return children
    }

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default InstractorRouter;