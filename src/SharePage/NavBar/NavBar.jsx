import {  Link, NavLink, useNavigate } from "react-router-dom";

import "./NavLink.css"

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
// bg-[#0abde3]




const NavBar = () => {

const navigate = useNavigate()

const {user, logout} = useContext(AuthContext)



const [isHovered, setIsHovered] = useState(false);

const handleHover = () => {
  setIsHovered(!isHovered);

}


const logoutAnyTime = () => {

    logout()

    navigate("/login")

}


    return (
        <>

 <div  className="bg-[#0abde3] relative  mt-5 font-Assistant">
        <div className="xl:mx-[240px] lg:mx-[80px] md:mx-[50px] mx-[10px]  ">


<div className="flex xl:flex-row lg:flex-row md:flex-row flex-col items-center justify-between w-full">

<div className="flex gap-[2px] items-center">
<img className="w-[100px]" src="https://i.ibb.co/KV1T2S3/pngwing-com.png" alt="Logo" />
<h2 className="font-bold text-white">MyTour</h2>
</div>


<ul className="flex xl:flex-row lg:flex-row md:flex-row flex-col drobdown  justify-center items-center gap-8 font-bold text-white">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/community">Community</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>
    <li><NavLink to="/about_us">About Us</NavLink></li>
    <li><NavLink to="/contact_us">Contact Us</NavLink></li>
    {
    //    email displayName photoURL
        user ? <div className="py-7">

<img onMouseEnter={handleHover} className="w-[50px] cursor-pointer drobdown p-[2px] rounded-full border-2 h-[50px] object-fill" src={user?.photoURL} alt="" /> 

</div> 
        
        :   <li><NavLink to="/login">Login</NavLink></li> 
      
    }


   
  
</ul>
</div>




</div>

{

isHovered && 

<div onMouseLeave={handleHover} className="w-[18rem] bg-slate-50 z-40 border-[1px] absolute top-[100%] rounded-md right-10 shadow-xl">
<div className="  font-Assistant font-semibold">

<div className=" shadow-md p-2 mt-4">
<h2 className="font-semibold">{user?.displayName}</h2>
<h2 className="text-[14px]">{user?.email}</h2>

<button onMouseLeave={handleHover} className="text-[14px] mt-4 bg-[#4b4b4b] hover:bg-[#4b4b4be1] rounded-md px-2 py-1 text-white" onClick={logoutAnyTime}>Log Out</button>
</div>


<Link className="text-black" to="/userdashboard"><div className="p-5 hover:bg-[#ddd]">
Dashboard
</div></Link>

<Link className="text-black" to="/"><div className="p-5 hover:bg-[#ddd]">
Offer Announcements 
</div></Link>
</div>
</div>
  
}
</div>






        </>
    );
};

export default NavBar;