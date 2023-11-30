import { Link, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";


const UserDashboard = () => {
    return (
        <div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[10px]">     
            
        
        
        <div className="xl:flex-row lg:flex-row md:flex-row flex-col  flex">

        <div className="xl:w-[600px] lg:w-[600px] md:w-[600px] w-full h-[500px] bg-[#0ABDE3] font-bold font-Assistant">
           
            <div className="flex gap-2 p-6 items-center">
               <AiFillHome className="text-white text-[20px]"></AiFillHome><h2 className="font-bold text-white">User Dashborard</h2>
            </div>

           <div className="flex flex-col text-white">
           <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px]  border-[#d2d2d2]  px-5 py-4"
            to="/userdashboard"><div className="flex  items-center text-[20px] gap-2"><CgProfile></CgProfile>My Profile</div></Link>

        <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px] px-5 py-4 border-[#d2d2d2] " to="mybookings">
       <div className="flex items-center text-[20px]  gap-2"><FaCartShopping></FaCartShopping><h2>My Bookings</h2>


         </div></Link>
         <Link className=" hover:bg-[#ddd] hover:text-black border-t-[1px] border-b-[1px] px-5 py-4 border-[#d2d2d2] " to="mywhishlist">
          
           <div className="flex items-center text-[20px]  gap-2">
           <AiFillCarryOut></AiFillCarryOut><h2>My Wishlist</h2>
           </div>
            
            </Link>
           </div>
        </div>



         <div className="w-full">
        <Outlet></Outlet>
        </div>
        </div>
       




        </div>
    );
};

export default UserDashboard;