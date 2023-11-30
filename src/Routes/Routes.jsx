
import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Layout/MainRoot/MainRoot";
import Error404 from "../Pages/Error404/Error404";
import Home from "../Pages/Home/Home";
import Community from "../Pages/Community/Community";
import Blogs from "../Pages/Blogs/Blogs";
import About_Us from "../Pages/About_Us/About_Us";
import Contact_Us from "../Pages/Contact_Us/Contact_Us";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import UserDashboard from "../Dashborard/UserDashboard/UserDashboard";
import MyProfile from "../Dashborard/UserDashboard/Pages/MyProfile/MyProfile";
import MyBookings from "../Dashborard/UserDashboard/Pages/MyBookings/MyBookings";
import MyWishlist from "../Dashborard/UserDashboard/Pages/MyWishlist/MyWishlist";
import SinglePage from "../Pages/SinglePage/SinglePage";
import MyProfileGuide from "../Dashborard/TourGuideDashboard/MyProfileGuide/MyProfileGuide";
import TourGuideDashboard from "../Dashborard/TourGuideDashboard/TourGuideDashboard";
import AdminDashboard from "../Dashborard/AdminDashboard/AdminDashboard";
import AddPackage from "../Dashborard/AdminDashboard/AddPackage/AddPackage";
import ManageUsers from "../Dashborard/AdminDashboard/ManageUsers/ManageUsers";
import MyProfileAdmin from "../Dashborard/AdminDashboard/MyProfileAdmin/MyProfileAdmin";
import MyAssignedTours from "../Dashborard/TourGuideDashboard/MyAssignedTours/MyAssignedTours";
import AddInformation from "../Dashborard/TourGuideDashboard/AddInformation/AddInformation";
import Tourcategory from "../Pages/tourcategory/tourcategory";
import BlogsSingle from "../Pages/BlogsSingle/BlogsSingle";


const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error404></Error404>,
      element: <MainRoot></MainRoot>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/community",
            element: <Community></Community>
        },

         {
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/blogsview/:id",
            element: <BlogsSingle></BlogsSingle>

        },
        {
            path: "/about_us",
            element: <About_Us></About_Us>
        },
        {
            path: "/contact_us",
            element: <Contact_Us></Contact_Us>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {

            path: "/singlepackage/:id",
            element: <SinglePage></SinglePage>,
            
        },
        {
            path: "/catagorytour",
            element: <Tourcategory></Tourcategory>
        }

        
      ]
      
    },


    {
        path: "/userdashboard",
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: "/userdashboard",
                element:<MyProfile></MyProfile>
            
           },

           {
                path: "mybookings",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            
           },
           {
                path: "mywhishlist",
                element: <MyWishlist></MyWishlist>
            
           },

    
    ]
    },

    {
        path: "/tourguide",
        element: <TourGuideDashboard></TourGuideDashboard>,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: "/tourguide",
                element: <MyProfileGuide></MyProfileGuide>
            
           },

           {
                path: "myassignedtour",
                element: <MyAssignedTours></MyAssignedTours>
            
           },
           {
            path: "addinformation/:id",
            element: <AddInformation></AddInformation>,
           
           }
          
    
    ]
    },
    
    {

        path: "/admindashboard",
        errorElement: <h2>Error</h2>,
        element: <AdminDashboard></AdminDashboard>,
        children: [
            {
                path: "/admindashboard",
                element: <MyProfileAdmin></MyProfileAdmin>
            },
            {
                path: "addpackage",
                element: <AddPackage></AddPackage>
            },
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            },
            
        ]
    }



  ]);


export default router

