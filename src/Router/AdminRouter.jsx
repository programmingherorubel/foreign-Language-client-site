import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';
import useAdmin from '../Hook/useAdmin';

const AdminRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [admin] = useAdmin()
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(user?.email && admin){
        return children
    }

    return <Navigate to='/' state={{from:location}}></Navigate>
};

export default AdminRouter;