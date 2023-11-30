


import { Link, Outlet } from "react-router-dom";
import { CgHome, CgProfile } from "react-icons/cg";

import { AiFillHome } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";


const TourGuideDashboard = () => {
    return (
        <div className="xl:mx-[90px] mx-[0px]">     
            
        
        
        <div className="flex xl:flex-row lg:flex-row flex-col">

        <div className="xl:w-[50%] lg:w-[40%] xl:h-[100vh] lg:[100vh] md:[100vh] h-[500px] bg-[#0ABDE3] font-bold font-Assistant">
           
            <div className="flex gap-2 p-6 items-center">
               <AiFillHome className="text-white text-[20px]"></AiFillHome><h2 className="font-bold text-white">Tour Guide Dashborard</h2>
            </div>

           <div className="flex flex-col text-white">
            
           <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px] border-b-[1px] px-5 py-4 border-[#d2d2d2] " to="/tourguide">
           <div className="flex items-center text-[20px]  gap-2">
           <AiFillCarryOut></AiFillCarryOut><h2>My Profile</h2>
           </div>
            </Link>

           <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px]  border-[#d2d2d2]  px-5 py-4" to="myassignedtour"><div className="flex  items-center text-[20px] gap-2"><CgProfile></CgProfile>My Assigned Tours</div></Link>

        <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px]  border-[#d2d2d2]  px-5 py-4" to="/"><div className="flex  items-center text-[20px] gap-2"><CgHome></CgHome>Home</div></Link>
   


    
           </div>
        </div>



         <div className="w-full">
        <Outlet></Outlet>
        </div>
        </div>
       




        </div>
    );
};

export default TourGuideDashboard;















