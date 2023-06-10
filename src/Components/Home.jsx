import React from 'react';
import Banner from './Banner';
import Instractor from './Instractor';
import Banner2 from './Banner2';
import AdminRouter from '../Router/AdminRouter';

const Home = () => {
    return (
        <>
            <Banner />
            <Instractor/>
            <Banner2/>
            <AdminRouter></AdminRouter>
        </>
    );
};

export default Home;