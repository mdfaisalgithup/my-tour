import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Error404 = () => {
    return (
       <>
       <Helmet>
  <title>Error404 - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>
       
       <div className="bg-[#ddd] ">

<div className="flex justify-center w-400px h-[100vh] items-center">
            <div className=" ">
            <h2 className="xl:text-[50px] text-center lg:text-[50px] md:text-[40px] text-[25px] font-bold font-Assistant">Error 404</h2>
            <p className="text-center font-semibold">Not Found Page</p>
            <button className="bg-orange-500 rounded-md hover:bg-orange-600 block font-bold mx-auto my-4 px-6 py-2 text-white"><Link>Back</Link></button>
        </div>

        </div>
        </div>
       
       
       </>
        
    );
};

export default Error404;