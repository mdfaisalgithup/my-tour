
import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";


const AdminDashboard = () => {
    return (
        <div className="mx-[240px]">     
            
        
        
        <div className="flex">

        <div className="w-1/3 h-[100vh] bg-[#0ABDE3] font-bold font-Assistant">
           
            <div className="flex gap-2 p-6 items-center">
               <AiFillHome className="text-white text-[20px]"></AiFillHome><h2 className="font-bold text-white">Admin Dashborard</h2>
            </div>

           <div className="flex flex-col text-white">
            
           <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px] border-b-[1px] px-5 py-4 border-[#d2d2d2] " to="/admindashboard">
           <div className="flex items-center text-[20px]  gap-2">
           <AiFillCarryOut></AiFillCarryOut><h2>My Profile</h2>
           </div>
            </Link>

           <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px]  border-[#d2d2d2]  px-5 py-4" to="addpackage"><div className="flex  items-center text-[20px] gap-2"><CgProfile></CgProfile>Add Packages</div></Link>


        <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px] px-5 py-4 border-[#d2d2d2] "
         to="manageusers">
       <div className="flex items-center text-[20px]  gap-2"><FaCartShopping></FaCartShopping><h2>Manage User</h2>
         </div></Link>


    
           </div>
        </div>



         <div className="w-full">
        <Outlet></Outlet>
        </div>
        </div>
       




        </div>
    );
};

export default AdminDashboard;









