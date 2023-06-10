import { faPersonChalkboard, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import CommonInsTractorTitle from '../Common/CommonInsTractorTitle';
import Loading from '../Components/Loading';
import { useQuery } from 'react-query';

const Users = () => {
    const [users,setUsers]=useState([])

   
   
    // allUsrs 
    // useEffect(()=>{
    //     fetch('http://localhost:9000/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // },[])
    const {refetch, data=[],isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res =await fetch(`http://localhost:9000/users`)     
            const ata = await res.json()
            setUsers(ata)
        },
    })

    
    // email Admin 

        const  emailAdmin = email =>{
            fetch(`http://localhost:9000/admin/${email}`,{
                method:'PUT'
            })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
        }

    // Email INstraction 

        const  emailIstractor = email =>{
            fetch(`http://localhost:9000/instractor/${email}`,{
            method:'PUT'
        })
        .then(res => res.json())
        .then(data => {
            refetch()
        })
    }
    
   
    

    return (
        <Container fluid>
            <Row>
                <CommonInsTractorTitle title='Usrs Information'></CommonInsTractorTitle>
                <Col className='col-12'>
                    <Table responsive w-100 striped bordered hover>
                        <thead>
                            <tr>
                                <th className='text-center w-full'>No</th>
                                <th className='text-center w-full'>email</th>
                                <th className='text-center w-full'>Role</th>
                                <th className='text-center w-full'>InsTructor</th>
                                <th className='text-center w-full'>Admin</th>
                                
                            </tr>
                        </thead>
                        {
                            users.map((usrsData,index) => <tbody key={index}>
                                <tr>
                                    <td className='text-center w-full'>{index + 1}</td>
                                    <td className='text-center w-full'>{usrsData.email}</td>
                                    <td className='text-center w-full'><b>{usrsData.role ? usrsData.role : 'User' }</b></td>
                                    <td onClick={()=>emailIstractor(usrsData.email)}  className='text-center w-full'><FontAwesomeIcon icon={faPersonChalkboard} className='text-primary ' style={{fontSize:'22px'}} /></td>
    
                                    <td onClick={()=>emailAdmin(usrsData.email)} className=' text-center w-full'><FontAwesomeIcon icon={faUserTie}  className='text-success' style={{fontSize:'22px'}}/></td>
    
                                   
                                </tr>
                            </tbody>)
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Users;