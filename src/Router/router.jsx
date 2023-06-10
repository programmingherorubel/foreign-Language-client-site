import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Course";
import Home from "../Components/Home";
import Main from "../Components/Main";
import SingleCourse from "../Components/SingleCourse";
import AllCourse from "../Dashbord/AllCourse";
import Dashbord from "../Dashbord/Dashbord";
import NewCourse from "../Dashbord/NewCourse";
import Users from "../Dashbord/Users";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import MyClass from "../Dashbord/MyClass";
import SelectCourse from "../Dashbord/SelectCourse";
import EditCourse from "../Dashbord/EditCourse";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/course',
                    element:<Course/>
                },
                {
                    path:'/course/:id',
                    element:<SingleCourse/>,
                    loader:({params})=> fetch(`http://localhost:9000/newcourse/${params.id}`)
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/reg',
                    element:<Reg/>
                },
                {
                    path:'/s',
                    element:<SelectCourse/>
                },
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord/>,
            children:[
                {
                    path:'/dashbord/myclass',
                    element:<MyClass/>
                },
                {
                    path:'/dashbord/course',
                    element:<NewCourse/>
                },
                {
                    path:'/dashbord/users',
                    element:<Users/>
                },
                {
                    path:'/dashbord/allcours',
                    element:<AllCourse/>
                },
                {
                    path:'/dashbord/edit/:id',
                    element:<EditCourse/>
                },
                
            ]
        }
        
        
    ]
)
export default router