import React from 'react';
import CustomNavbar from '../Common/CustomNavbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <CustomNavbar/>
            <Outlet></Outlet> 
            <Toaster
                position="top-center"
                reverseOrder={false}
            />  
        </>
    );
};

export default Main;