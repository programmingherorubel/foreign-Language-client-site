import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CommonInsTractorTitle from '../Common/CommonInsTractorTitle';
import Loading from '../Components/Loading';
import Button from 'react-bootstrap/Button';
import DeniedModal from '../Components/DeniedModal';
import { useQuery } from 'react-query';
import axios from 'axios';



const AllCourse = () => {
  
    const [show, setShow] = useState('');
    const handleClose = () => setShow('');
    const handleShow = () => setShow(true);
    


    const { data=[], refetch,isLoading } = useQuery(
        ["classes"],
        async () => {
          const res = await axios.get(`http://localhost:9000/newcourse`);
          return res.data;
        }
      );

if(isLoading){
    return <Loading/>
}

  
    const handelApproved = (id) => {
        const ready = confirm('are you sure yout approve this course')
        if (ready) {
            const url = `http://localhost:9000/newcourse/approved/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                })
        }
    }

    



    return (
        <Container fluid>
            <Row>
                <CommonInsTractorTitle title='Course Approval Information'></CommonInsTractorTitle>
                <Col className='col-12'>
                    <Table responsive w-100 striped bordered hover>
                        <thead>
                            <tr>
                                <th className='text-center w-full'>No</th>
                                <th className='text-center w-full'>Image</th>
                                <th className='text-center w-full'>Course Name</th>
                                <th className='text-center w-full'>coursePrice</th>
                                <th className='text-center w-full'>teachersName</th>
                                <th className='text-center w-full'>Status</th>
                                <th className='text-center w-full'>Action</th>
                                <th className='text-center w-full'>Denied</th>
                            </tr>
                        </thead>
                        {
                            data.map((course, index) => <tbody key={index}>
                                
                                <tr> 
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-center'><img src={course.Img} style={{ width: '80px' }} alt="" /></td>
                                    <td className='text-center'>{course.courseName}</td>
                                    <td className='text-center'>{course.coursePrice}</td>
                                    <td className='text-center'>{course.teachersName}</td>
                                    <td className='text-center'>{course.status}</td>
                                    <td className='text-center' style={{ fontWeight: '700' }}>
                                        <button 
                                        className={'bg-success btn text-white'}
                                        disabled={course.status === "approved"}
                                        onClick={() => handelApproved(course._id)}
                                        >
                                        approved
                                        </button>
                                    </td>
                                    
                                    <td className='text-center' style={{ fontWeight: '700' }}>
                                        <Button 
                                        disabled={course.status === "denied"}
                                        variant="danger" 
                                        onClick={()=>setShow(course._id)}
                                        >
                                    Denied 
                                    </Button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                </Col>
            </Row>
           {!!show && <DeniedModal courseId={show} refetch={refetch} handleClose={handleClose} show={!!show}/>}
        </Container>
    );
};

export default AllCourse;



