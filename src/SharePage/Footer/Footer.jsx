import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io5";

const Footer = () => {
    return (

        <div className="w-full h-[250px] bg-[#282828] font-Assistant">


        <div className="flex justify-center items-center h-full">
            <div>
                 <h2 className="text-white text-center my-6 font-bold">MyTour</h2>

                <p className="my-4 text-center font-medium text-[#8c8c8c]">MyTour: Your personalized travel hub. Effortless bookings, tailored experiences, real-time updates. Your journey, simplified</p>

                 <div className="flex gap-5 justify-center">
                     <FaFacebook className="text-white hover:text-orange-400 border-[1px] rounded-full p-1 cursor-pointer text-[30px]"></FaFacebook>
                     <FaTwitter className="text-white hover:text-orange-400 border-[1px] rounded-full p-1 cursor-pointer text-[30px]"></FaTwitter>
              
                     <IoLogoSkype className="text-white hover:text-orange-400 border-[1px] rounded-full p-1 cursor-pointer text-[30px]"></IoLogoSkype>
                 </div>
            </div>
           
    
        </div>
            



        </div>
    );
};

export default Footer;