
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyProfileGuide = () => {
    const [data, setdata] = useState([])
    const[loading, setLoading] = useState(true)

  const url = "https://mytour-two.vercel.app/tourguide"
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then(res => res.json())
        .then(data => {
         
            data.forEach(d => {
               setLoading(false)
                     setdata(d)
            });
       
        })
        
        
        }, [url]) 

        

      console.log("dfsf")


    return (
        <div className="font-Assistant m-4 p-5"> 
        <h2 className="text-center font-bold my-4">My Profile Guide</h2>
            <div className="border-[1px]  p-4">
                <div className="relative w-[100px] h-[100px] ">
                <img className="w-full h-full rounded-full" src={data?.imageprofile} alt="profile" />

                <div className="top-0 absolute h-full flex justify-center w-full">
               {
                loading &&  <span className="loading text-[18px] loading-spinner text-primary"></span>
               }
                </div>
                </div>

                <div className="mt-10 font-Assistant space-y-4">
                    <div>
                     <h2><span className="font-bold">Name:</span> <span className="font-semibold">{data?.fullname}</span></h2> 
                    </div>
                  
                
                  <div>
                     <h2><span className="font-bold">Contact Details:</span> <span className="font-semibold">{data?.education}</span></h2> 
                    </div>
                    
                    <div>
                     <h2><span className="font-bold">Skills:</span> <span className="font-semibold">{data?.skill}</span></h2> 
                    </div>

                     <div>
                     <h2><span className="font-bold">Work Experience:</span> <span className="font-semibold">{data?.workExperience}</span></h2> 
                    </div>
             
                    
                    <button className="font-bold rounded-md bg-green-400 text-white hover:bg-green-500 p-2">
                        <Link to={`addinformation/${data._id}`}>Add Information</Link>
                        </button>
            
                </div>
         
            </div>
           

            <div>


            </div>



        </div>
    );
};

export default MyProfileGuide;






