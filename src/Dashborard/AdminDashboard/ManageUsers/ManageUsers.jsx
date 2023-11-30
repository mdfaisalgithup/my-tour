import { useEffect, useState } from "react";

const ManageUsers = () => {
const [manageSee, setManageSee] = useState([])
const [loading, setLoading] = useState(true)
const [reaload, setReload] = useState()

useEffect(() => {
    setLoading(true)
    fetch("https://mytour-two.vercel.app/manageuser")
    .then(res => res.json())
    .then(data => {
   
        setManageSee(data)
    setLoading(false)
    
    })
 }, [reaload])


 




 const makeAdmin = (email) => {

  
  const data = {
        email,
        status: "admin"
    }


  fetch("https://mytour-two.vercel.app/makeadmin", {
        method: "PATCH",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify(data)})
        .then(res => res.json())
                   .then(d => {
                
                    console.log(d)
       setReload(false)
                   
                   })
 
  }




 const makeTourGuide = (email) => {   

  const data = {
        email, 
        status: "Tourist"
    }

           fetch("https://mytour-two.vercel.app/makeadmin", {
            method: "PATCH",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)})
            .then(res => res.json())
            .then(() => {

                setReload(true)
            })




 }
 





    return (
        <div className="font-Assistant my-10">
            <h2 className="font-bold my-4 text-[20px] text-center">Manage Users</h2>


            {
                 loading ? <div className="flex justify-center"><span className="loading loading-spinner text-primary"></span></div>
                
                
                :   <div className="flex justify-center">
                    <div>
                  {

       
                manageSee.map((d, index) => {
           
                    return(
                    
                    <div key={index} className="border-[1px] p-2 my-6">
                        <img className="w-[60px] mx-auto rounded-full" src={d?.profileImage} alt="image" />
                        <h2 className="font-bold my-2 text-center">{d?.Name}</h2>
                        <h2 className="font-bold text-center my-4"><span className="text-green-500">Status:</span> {d.status ? d.status : null}</h2>
                        <div>
                            <button disabled={d?.status == "admin"} onClick={() => makeAdmin(d.Email, d.idNum)} className={`px-2 ${d?.status == "admin" ? "bg-green-200" : "bg-green-600"} py-2 mx-2 font-bold  rounded-md text-white`}>Make Admin</button>
                            
                            <button disabled={d?.status == "Tourist"} onClick={() => makeTourGuide(d.Email, d.idNum)} className={`px-2 py-2  font-bold ${d?.status == "Tourist" ? "bg-green-200" : "bg-green-600"}  rounded-md text-white`}> Make Tour Tourist</button>
                        </div>
                    </div>
                    
                    
                    )
                })
            }
            </div>

            </div>

            }

          
          

        </div>
    );
};

export default ManageUsers;