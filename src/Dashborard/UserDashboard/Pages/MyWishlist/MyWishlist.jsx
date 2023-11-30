import { useContext, useState } from "react";
import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const MyWishlist = () => {
    const [data, setdata] = useState([])
    const [loading, setLoading] = useState(true)
    const [show, setShowAll] = useState(3)
    const [reload, setreaload] = useState(null)
    const {user} = useContext(AuthContext)


useEffect(() => {

setLoading(true)
fetch(`https://mytour-two.vercel.app/myheart?email=${user?.email}`)
.then(res => res.json())
.then(mywhishdata => {
 setLoading(false)
    setdata(mywhishdata)


})
}, [reload, user?.email])









const myHeart = (id) => {


    fetch("https://mytour-two.vercel.app/myheartdelete", {

     method: "DELETE",
     headers: {"content-type" : "application/json"},
     body: JSON.stringify({id})

    })
    .then(res => res.json())
    .then((d) => {
        
       console.log(d)
       if(d.deletedCount > 0){

         setreaload(id)


          
       }
  
       
    })
   
  
  }
  





    return (
        <div className='mx-[10px] font-Assistant my-30'>
        <h2 className='text-center font-bold text-[20px] my-6'>Our Wishlist</h2>
        
        <div>
        {
          loading ? <div className='flex justify-center h-[200px]'><span className="loading loading-spinner loading-md"></span></div>
          
          
          :   <>
        
        
        <div className='xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 grid gap-4'>
        {
        data?.slice(0, show).map((d, index) => {
        
            return(
            <div key={index} className='font-Assistant rounded-md border-[1px] p-4'>
             
             <div className='relative'>
                 <img className='w-[100%] rounded-md h-[250px]' src={d?.tour_image} alt="" />
               <div className='absolute right-0 top-0 p-2'>
               <button onClick={() => myHeart(d?.idNum)}>
                <TiDelete className='text-[30px] text-red-500 hover:text-red-600'></TiDelete></button>
               </div>
             </div>
            
        
        
        
        
           <div className='my-4 space-y-2'>
           <h2><span className='font-bold'>Trip Name: </span>{d?.trip_name}</h2>
                <h2><span className='font-bold'>Tour Type: </span>{d?.tour_type}</h2>
                <h2><span className='font-bold'>Price: </span> {d?.price}$</h2>
           </div>
        
        
               <Link to={`/singlepackage/${d?._id}`}> <button className='bg-orange-400 px-4 py-3 rounded-md font-bold text-black block mx-auto hover:bg-[#ddd] text-[17px]'>View Package</button>
        </Link>
        
            </div>
            
            
            
            )
        })
        }
        </div>
        
        <div className='my-4'>
        <button onClick={() => setShowAll(data.length)} className={`bg-orange-400 px-4 py-3 rounded-md font-bold text-black block mx-auto hover:bg-[#ddd] text-[17px] ${data.length >= show  ?
          show == data.length ?  "hidden" : "visible"  : "hidden"}`}>All View Package</button>
        </div>
          </> 
        }
        
        
        
        
        
        </div>
        
        </div>
    );
};

export default MyWishlist;