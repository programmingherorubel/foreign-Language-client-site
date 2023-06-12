import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Course";
import Home from "../Components/Home";
import Instractor from "../Components/Instractor";
import Main from "../Components/Main";
import NotFound from "../Components/NotFound";
import SingleCourse from "../Components/SingleCourse";
import AllCourse from "../Dashbord/AllCourse";
import Dashbord from "../Dashbord/Dashbord";
import EditCourse from "../Dashbord/EditCourse";
import MyClass from "../Dashbord/MyClass";
import NewCourse from "../Dashbord/NewCourse";
import Payment from "../Dashbord/Payment";
import PaymentSuccess from "../Dashbord/PaymentSuccess";
import SelectCourse from "../Dashbord/SelectCourse";
import Users from "../Dashbord/Users";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import AdminRouter from "./AdminRouter";
import InstractorRouter from "./InstractorRouter";




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
                    loader:({params})=> fetch(`https://project12server-programmingherorubel.vercel.app/newcourse/${params.id}`)
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
                    path:'/instructor',
                    element:<Instractor/>
                },
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord/>,
            children:[
                {
                    path:'/dashbord/myclass',
                    element:<InstractorRouter> <MyClass/></InstractorRouter>
                },
                {
                    path:'/dashbord/course',
                    element:<InstractorRouter> <NewCourse/></InstractorRouter>
                },
                {
                    path:'/dashbord/users',
                    element: <AdminRouter> <Users/></AdminRouter>
                },
                {
                    path:'/dashbord/allcours',
                    element:<AdminRouter><AllCourse/></AdminRouter> 
                },
                {
                    path:'/dashbord/edit/:id',
                    element:<InstractorRouter><EditCourse/></InstractorRouter> 
                },
                {
                    path:'/dashbord/selectcourse',
                    element:<SelectCourse/>
                },
                {
                    path:'/dashbord/pyment/:id',
                    element:<Payment/>,
                    loader:({params})=>fetch(`https://project12server-programmingherorubel.vercel.app/addtocart/payment/${params.id}`)
                },
                {
                    path:'/dashbord/success',
                    element:<PaymentSuccess/>,
                },
                
            ]
        },

       {
        path:'*',
        element:<NotFound></NotFound>
       }
        
        
    ]
)
export default router



