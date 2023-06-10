import React from 'react';
import Button from '../Common/button';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
    const {Img,courseName,availableSeat,_id} = course || {}
    return (
        <div className='m-3'>
            <Link style={{textDecoration:'none'}} to={`/course/${_id}`}>
            <img src={Img} className='img-fluid' alt='' />
            <div className='p-2' style={{display:'flex',justifyContent:'space-between'}}>
                <h6 className='mx-2' style={{color:'gray'}}>{courseName}</h6>
                <h6 className='mx-2' style={{color:'gray'}}>Available<span  style={{color:'#1A1F45'}}>{availableSeat}</span></h6>
            </div>
            </Link>
            <Button buttonTitle='Select Class'></Button>
        </div>
    );
};

export default CourseCard;