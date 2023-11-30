import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { MdCancel } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const MyBookings = () => {

    const [data, seeData] = useState([])
    const [reload, setReload] = useState(null)
    const [loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext)
    

    useEffect(() => {
        setLoading(true)
        fetch(`https://mytour-two.vercel.app/touradduniqe?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            seeData(data) 
             setLoading(false)   
        })
    }, [reload, user?.email])




const cancelButton = (id) => {
    
    const dataCancel = {status: "Rejected", id}

    fetch("https://mytour-two.vercel.app/tourupdate", {

    method: "PATCH",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(dataCancel)
    })
    .then(res => res.json())
    .then(() => {
        setReload("Rejected")

   
    })


    
}

const payButton = (id) => {

    const dataPay = {status: "Accepted", id}

    fetch("https://mytour-two.vercel.app/tourupdate", {

    method: "PATCH",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(dataPay)
    })
    .then(res => res.json())
    .then(() => {
        setReload("Accepted")
      
    })
 
}
// "Accepted"
const applyButton = (id) => {
    const dataPay = {status: "Success", id}

    fetch("https://mytour-two.vercel.app/tourupdate", {

    method: "PATCH",
    headers: {"content-type" : "application/json"},
    body: JSON.stringify(dataPay)
    })
    .then(res => res.json())
    .then(() => {
        setReload("Success")

    })
}

const deleteMybooking = (id) => {

    fetch("https://mytour-two.vercel.app/deletemybooking", {

    method: "DELETE", 
    headers: {"content-type" : "application/json"},
    body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(d => {
        setReload(id)
        console.log(d)
    })
    console.log(id)
}




    return (
        <div className="my-6 font-Assistant">
            <h2 className="font-bold text-center my-6 text-[20px]">My Bookings</h2>

            {

             loading  ? <div className='flex justify-center h-[200px]'><span className="loading loading-spinner loading-md"></span></div> : <div className="flex justify-center my-6">


            <div>

                {
                    data.length == 0 ?
                    
                    
              <div>
                  <h2 className="font-Assistant text-center font-bold">Empty Data, You are add tour package.</h2>
                 
                 <div className="flex justify-center">
                 <MdDeleteForever className="text-[30px] text-red-500"></MdDeleteForever>
                 </div>
 

                </div>
                    
                    : data.map((d, index) => {
                      

                        return(<div key={index} className="border-[1px] w-full relative rounded-md p-6 m-2">
                          <div>
                          <h2><span className="font-bold">Package Name:</span> {d?.trip_name}</h2>
                            <h2><span className="font-bold">Tour Guide Name:</span> {d?.tourGuidename}</h2>
                            <h2><span className="font-bold">Tour Date:</span> {d?.tourDate}</h2>
                            <h2><span className="font-bold">Tour Price:</span> {d?.touristPrice}$</h2>
                           <h2><span className="font-bold">Status:</span> {d?.status == "Success" ? "Accepted" : d?.status ?  d?.status : "In Review"  }</h2>
                          </div>
                          <div className="flex gap-2 mt-4">
                           
                            
                  
                            <div>
                            <button disabled={d?.status == "Rejected"} onClick={() => cancelButton(d?.idNum)} className={` rounded-md  px-4 py-2 font-bold text-white ${d?.status == "Rejected" ? "bg-[#ddd]" : "bg-red-500  hover:bg-red-600"}`}>Cancel</button>
                            </div>

                         <div>
                         <button onClick={() => payButton(d?.idNum)} className={` rounded-md  px-4 py-2 font-bold text-white ${d?.status == "Accepted" ? "bg-[#ddd]" : "bg-orange-500 hover:bg-orange-600"}`}>Pay</button>
                         </div>
                            

                          <div>
                          <button disabled={d?.status == "Success"}   onClick={() => applyButton(d?.idNum)} className={`  rounded-md  px-4 py-2 ${d?.status == "Success" ? "bg-[#ddd]" : "bg-green-500"} font-bold text-white`}>Apply</button>
                          </div>
                        
                          </div>

                          <div className="absolute top-[3px] right-[4px]">
                                <MdCancel onClick={() => deleteMybooking(d?._id)} className="text-[23px] cursor-pointer text-red-500 hover:text-red-600"></MdCancel>
                            </div>


                          
                            
                            </div>)
                    })
                }
            </div></div>
            
            }
                   
        </div>
    );
};

export default MyBookings;