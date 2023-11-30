import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCancel } from "react-icons/md";

const MyAssignedTours = () => {
const [data, setData] = useState([])
const navigate = useNavigate()
const [loading, setLoading] = useState(null)
const [reaload, setReload] = useState(null)


useEffect(() => {

    setLoading(true)
    fetch("https://mytour-two.vercel.app/tourguidepack")
    .then(res => res.json())
    .then(d => {
        setLoading(false)
 

        setData(d)
    })

}, [reaload])







const reject = (id) => {
    setLoading(id)
    const dataPay = {status: "Rejected", id}
  
    fetch("https://mytour-two.vercel.app/tourupdateone", {
    method: "PATCH",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(dataPay)
    })
    .then(res => res.json())
    .then((d) => {
        console.log(d)
        setReload(id)
        setLoading(null)
       
    })
 



}


const deleteTours = (id) => {
    setLoading(id)
    fetch("https://mytour-two.vercel.app/deletetours", {

    method: "DELETE", 
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(d => {
        setReload(id)
        console.log(d)
   setLoading(id)
    })


}



const accept = (id) => {

    // const dataPay = {status: "Accepted", id}
    // fetch("https://mytour-two.vercel.app/tourupdatetwo", {
    // method: "PATCH",
    // headers: {"content-type" : "application/json"},
    // body: JSON.stringify(dataPay)
    // })
    // .then(res => res.json())
    // .then((d) => {
    //     console.log(d)
    
    // })

    fetch("https://mytour-two.vercel.app/acceptdelete", {

    method: "DELETE",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then((d) => {
        console.log(d)


       navigate(`/userdashboard/mybookings`)
    })

    


}





    return (
        <div className="font-Assistant my-10 border-[1px] m-4">
            <h2 className="font-bold text-center my-10">MyAssigned Tours</h2>
            {
                loading  ? <div className="flex justify-center"><span className="loading loading-spinner text-primary"></span></div> : <div> 

                {
                     <div>
            
                {
                    data?.map((d, index) => {

                        return (
                        <div key={index} className="border-t-[1px] w-full p-5">
                        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col">

                              <div className="w-full"><h2 className="flex gap-2"><span>{index+1}</span><span className="text-[17px]">{d?.trip_name}</span></h2></div>
                              
                              <div className="w-full"> <h2> Tourist Name: {d?.touristName}</h2></div>
                              <div className="w-full"> <h2> tour date: {d?.tourDate}</h2></div>
                              <div className="w-full"> <h2>Price: {d?.touristPrice}</h2></div>
                            

                            <div className="flex gap-2 items-center">
                            <div> <MdCancel onClick={() => deleteTours(d?._id)} className="text-[23px] cursor-pointer hover:text-red-700 text-red-600"></MdCancel></div>
                                
                              
                                <div>
                                    {
                                         <button disabled={d.status == "Rejected"} onClick={() => reject(d?.idNum)} className={`${d.status == "Rejected" ? "bg-slate-200" : "bg-red-400"} px-2 py-[4px] rounded-md text-[15px] font-bold text-white`}>{d?.status == "Rejected" ? d.status : "Reject"}</button>
                                    }
                                
                                
                                
                               
                                </div>
                               
                               <div>
                               <button onClick={() => accept(d?._id)} className={` px-2 py-[4px] rounded-md text-[15px] font-bold text-white ${d?.status == "Accepted" ? "bg-slate-100" : "bg-green-400"}`}>
                               
                               { d?.status == "Accepted" ? d.status : "Accept"}
                               </button>
                               </div>
                            </div>

                          
                           </div>
                           
                          
                             
                        </div>)
                    })
                }
            </div>
                }

                
                
            
            </div>
            }
       

            
        </div>
    );
};

export default MyAssignedTours;