import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../Components/About";
import Blog from  "../Components/Blog"
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Logout from "../Components/LogOut";
import LogOut from "../Components/LogOut";
import BookDetails from "../shop/BookDetails";
import PaymentPage from "../shop/PaymentPage";
import OrderSuccess from "../shop/OrderSuccess";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
         children:[
            {
                path:'/',
                element:<Home/>
             },
            {
                path:"/shop",
                element:<Shop/>,
             },
             {
                 path:"/about",
                element:<About/>
             },
             {
                 path:"/blog",
                 element:<Blog/>
             },
            //  {
            //     path:"/book/:id",
            //     element:<SingleBook/>,
            //     loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
            //  },
            //  {
            //     path:"/book/:id",
            //     element:<BookDetails/>
            //  },
            {
                path: "/book/view/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
              },
              {
                path: "/book/buy/:id",
                element: <BookDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/book/${params.id}`)
              },
             {
                path:"/payment",
                element:<PaymentPage/>
             },
             {
                path:"/order-success",
                element:<OrderSuccess/>
             }
        ]
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRouter><Dashboard/></PrivateRouter>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBooks/>
            },
            {
                path:"/admin/dashboard/manage",
                element:<ManageBooks/>
            },
            {
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                loader:({params})=> fetch(`http://localhost:5000/book/${params.id}`)
            },
        ]
    },
    {
        path:"sign-up",
        element:<SignUp/>
    },
    {
        path: "login",
        element:<Login/>
    },
    {
        path: "logout",
        element:<LogOut/>
    }


]);
export default router;