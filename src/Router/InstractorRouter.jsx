import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import useTeachers from '../Hook/useTeachers';
import { AuthContext } from '../Provider/AuthProvider';

const InstractorRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [teachers] = useTeachers()
    

    if(loading){
        return <Loading/>
    }

    if(user?.email && teachers){
        return children
    }

    return <Navigate to='/' ></Navigate>
};

export default InstractorRouter;