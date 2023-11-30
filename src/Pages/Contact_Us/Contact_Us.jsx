import { Helmet } from "react-helmet";


const Contact_Us = () => {
    return (
      <div>
      <Helmet>
  <title>Contact Us - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>

          <div className="xl:mx-[240px] lg:mx-[150px] mx-[10px] my-10">
     


     <div>
         <form>

             <div className="xl:w-1/2 lg:[70%] w-full bg-[#0ABDE3] p-10 mx-auto space-y-4 text-white font-Assistant rounded-md">       
             <h2 className="font-bold text-center">Contact Us</h2>

          <div>
          <label className="font-bold my-2" htmlFor="name">Email:</label>
         <input  placeholder="Write your Name" className="w-full p-3 font-Assistant outline-none rounded-md text-black"  type="text" name="name" id="name" />

          </div>

         
          <div>
          <label className="font-bold my-2" htmlFor="email">Name:</label>
         <input placeholder="Write your email" className="w-full border-[1px] p-3 outline-none font-Assistant text-black rounded-md" type="text" name="name" id="email" />
          </div>

          <div>
          <textarea placeholder="Are You Write About Tour?" className="p-4 rounded-md text-black outline-none w-full" name="tourabout" id="" cols="30" rows="3"></textarea>
          </div>

          <textarea placeholder="Write Your Message" className="p-4 rounded-md text-black outline-none w-full" name="message" id="" cols="30" rows="10"></textarea>

         
          <input className="px-4 text-[18px] cursor-pointer hover:bg-orange-600 block mx-auto black py-2 font-bold bg-orange-500 text-white rounded-md" type="submit" value="Submit" />


          

             </div>

         </form>
     </div>
 </div>
      </div>
    );
};

export default Contact_Us;