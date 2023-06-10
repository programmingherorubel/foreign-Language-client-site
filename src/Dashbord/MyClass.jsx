import { faEdit, faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Modal, Row, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import CommonInsTractorTitle from '../Common/CommonInsTractorTitle';
import { AuthContext } from '../Provider/AuthProvider';

const MyClass = () => {
    const [loading,setLoading]= useState(true)
    const [myclass,setMyClass] = useState([])
    const {user}= useContext(AuthContext)
    const [show, setShow] = useState(false);
    const [info,setInfo]= useState({})
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const nodatafound =  <div style={{width:"100%",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center"}}><b>No Data Found</b></div>

    useEffect(()=>{
        fetch(`http://localhost:9000/myclass/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyClass(data)
            setLoading(false)
        })
    },[user?.email])

   const content = <>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>FeedBack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <b className='text-warning'><i>{info?.feedback?.feedback || nodatafound}</i></b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
   </>



    return (
        <Container>
            <Row>
                <CommonInsTractorTitle title='My Class'></CommonInsTractorTitle>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th className='border border-1 text-center'>No</th>
                                <th className='border border-1 text-center'>Class Name</th>
                                <th className='border border-1 text-center'>Seat</th>
                                <th className='border border-1 text-center'>Feedback</th>
                                <th className='border border-1 text-center'>Edit Class</th>
                            </tr>
                        </thead>
                        {
                            myclass.map((tableData,index) => <tbody key={index}>
                                <tr>
                                    <td className='border border-1 text-center'>{index + 1}</td>
                                    <td className='border border-1 text-center'>{tableData.courseName}</td>
                                    <td className='border border-1 text-center'>{tableData.availableSeat}</td>
                                    <td onClick={()=>setInfo(tableData)} className='border border-1 text-center'>
                                        <FontAwesomeIcon  onClick={handleShow} style={{width:'25px'}} icon={faMessage} />
                                       
                                      </td>
                                    <td className='border border-1 text-center'>
                                        <Link to={`/dashbord/edit/${tableData._id}`}>
                                            <FontAwesomeIcon style={{width:'25px'}} icon={faEdit} />
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>)
                        }
                    </Table>
                    
                    {content}
                </Col>
            </Row>
        </Container>
    );
};

export default MyClass;