import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import '../Style/Dashbord.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faKey, faLock, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthProvider';
import useAdmin from '../Hook/useAdmin';
import useTeachers from '../Hook/useTeachers';
import NotFound from '../Components/NotFound';



const Dashbord = () => {
    const {user,logout} = useContext(AuthContext)
    const [activemobile,setActivmobileMenu] = useState(false)
    const [admin] = useAdmin()
    const [teachers] = useTeachers()
    return (
        <>
        {user?.email ? 
        <Container fluid>
            <Row>

                <header className='py-2' style={{display:'flex',justifyContent:'space-between',boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',background:'#073857'}}>
                    <div>
                        <h2 style={{fontFamily: "'Berkshire Swash', cursive",color:'white'}}>foreign Language</h2>
                    </div>
                    <div className='mx-4 mt-4' style={{display:'flex',fontSize:'16px'}}>
                    {user?.email && <div style={{display:'flex',alignItems:'center'}}>
                    <img src={user?.photoURL} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="" />
                    <Link to='/' className='text-white' style={{fontWeight:'700',margin:'0 10px'}} onClick={()=>logout()}>Logout</Link>
                </div>}
                        <b onClick={()=>setActivmobileMenu(!activemobile)}><i class="text-white hamburger mx-4 fa-solid fa-bars"></i></b>
                    </div>
                </header>
                <div style={{display:'flex'}} className='mt-2'>
                    
                <div style={{height:'100vh'}} className='dashbordMenu'>

                    {/* link  */}
                    <ul>
                        {user?.email && !teachers && !admin && <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/selectcourse' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}} class="mx-2 mt-4 fa-solid fa-check"></i>Select Course</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/success' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}} class="mx-2 mt-4 fa-solid fa-thumbs-up"></i>Order Success</Link>
                        </li>
                        </div>}

                       {user?.email  && teachers  && <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>

                         <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/myclass' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i class="mx-2 mt-4 fa-solid fa-list"></i>MyClass</Link>
                        </li>
                       
                        <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/course'>
                            <FontAwesomeIcon icon={faKey} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> Add Course</Link>
                        </li>
                        </div>
                    }
                      {user?.email  && admin  &&
                      <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>

                          <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/users'>
                            <FontAwesomeIcon icon={faUsers} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> Users Actions</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/allcours'>
                            <FontAwesomeIcon icon={faLock} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> All Course </Link>
                        </li> </div>}
                        
                    </ul>
                    
                    {/* link  */}
                </div>
                <div style={{height:'100vh'}} className={activemobile ? 'moibileMenu activemobile':'moibileMenu'}>
                    {/* link  */}
                    <ul>
                        {user?.email && !teachers && !admin && <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/selectcourse' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}} class="mx-2 mt-4 fa-solid fa-check"></i>Select Course</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/success' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}} class="mx-2 mt-4 fa-solid fa-thumbs-up"></i>Order Success</Link>
                        </li>
                        </div>}

                       {user?.email  && teachers  && <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>

                         <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord/myclass' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i class="mx-2 mt-4 fa-solid fa-list"></i>MyClass</Link>
                        </li>
                       
                        <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/course'>
                            <FontAwesomeIcon icon={faKey} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> Add Course</Link>
                        </li>
                        </div>
                    }
                      {user?.email  && admin  &&
                      <div>
                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}><i style={{color:'gray',fontSize:'22px'}}  class="mt-4 mx-2 fa-solid fa-house"></i> Users Home</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none" }}>
                            <Link to='/dashbord' style={{textDecoration:'none',color:'gray',fontWeight: '700'}}>
                            <i style={{color:'gray',fontSize:'22px'}}  class="mx-2 mt-4 fa-sharp fa-solid fa-house"></i>Dashbord</Link>
                        </li>

                          <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/users'>
                            <FontAwesomeIcon icon={faUsers} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> Users Actions</Link>
                        </li>

                        <li className='m-1 p-1' style={{ listStyle: "none"}}>
                            <Link style={{ textDecoration: 'none',color:'gray', fontWeight: '700' }} to='/dashbord/allcours'>
                            <FontAwesomeIcon icon={faLock} className='mx-2 mt-4' style={{color:'gray',fontSize:'22px'}} /> All Course </Link>
                        </li> </div>}
                        
                    </ul>

                    {/* link  */}
                    </div>
                <div className='mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            </Row>
            <Toaster
                position="top-center"
                reverseOrder={false}
            /> 
        </Container>
            :
             <NotFound/>
             }
    </> 
    );
};

export default Dashbord;