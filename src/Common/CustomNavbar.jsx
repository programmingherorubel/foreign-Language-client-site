import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/customNavbar.css';
import { AuthContext } from '../Provider/AuthProvider';



const CustomNavbar = () => {
    const {user,logout} = useContext(AuthContext)
    const [activeHeader, setActiveHeader] = useState(false)
   

    const DeskotpNav = <>
        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Home</Link></li>


        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/course'>Classes</Link></li>


        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/dashbord'>Dashbord</Link></li>


        {user ? <li onClick={()=>logout()} className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} >LogOut</Link></li>
        :
        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/login'>Login</Link></li>}


    </>


    const Mobile = <>
        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Home</Link></li>


        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/course'>Classes</Link></li>


        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/dashbord'>Dashbord</Link></li>

        {user ? <li onClick={()=>logout()} className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} >LogOut</Link></li>
        :
        <li className='mt-2' style={{ listStyle: 'none' }}><Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/login'>Login</Link></li>}
    </>
    return (
        <Container fluid style={{ background: '#1A1F45' }} className='header'>
            <Container>
                <Row>
                    <Col>
                        <div className='navigation'>
                            <div style={{ height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2 style={{fontFamily: "'Berkshire Swash', cursive",color:'white'}}>foreign Language</h2>
                                <div className='DesktopMenu'>
                                    <ul className='d-flex gap-3'>
                                        {DeskotpNav}
                                    </ul>
                                </div>
                                <div className='hamburger' onClick={() => setActiveHeader(!activeHeader)}>
                                    <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '24px' }} />
                                </div>
                                <div className={activeHeader ? 'MobileMenu activeheader' : 'MobileMenu'}>
                                    <ul>
                                        {Mobile}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default CustomNavbar;