import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const Tourcategory = () => {
    const [seeData, setData] = useState([])
    const [show, setShowAll] = useState(3)
    const [loading, setLoading] = useState(true)

const idsee = useLocation()
const id = idsee.search.split("=")
useEffect(() => {
    setLoading(true)
 fetch(`https://mytour-two.vercel.app/travelimages?id=${id}`)
 .then(res => res.json())
.then(d => {
    setData(d)
    setLoading(false)
})

    


}, [])




    return (
        <div>
            <div className='mx-[240px] font-Assistant my-30'>
<h2 className='text-center font-bold text-[20px] my-6'>Our Packages</h2>

<div>
{
  loading ? <div className='flex justify-center h-[200px]'><span className="loading loading-spinner loading-md"></span></div>
  
  
  :   <>


<div className='grid-cols-3 grid gap-4'>
{
seeData.slice(0, show).map((d, index) => {

    return(
    <div key={index} className='font-Assistant rounded-md border-[1px] p-4'>
     
     <div className='relative'>
         <img className='w-[500px] rounded-md object-cover h-[300px]' src={d.tour_image} alt="" />
       <div className='absolute right-0 top-0 p-2'>
      
       </div>
     </div>
    




   <div className='my-4 space-y-2'>
   <h2><span className='font-bold'>Trip Name: </span>{d?.trip_name}</h2>
        <h2><span className='font-bold'>Tour Type: </span>{d.tour_type}</h2>
        <h2><span className='font-bold'>Price: </span> {d.price}$</h2>
   </div>


       <Link to={`/singlepackage/${d._id}`}> <button className='bg-orange-400 px-4 py-3 rounded-md font-bold text-black block mx-auto hover:bg-[#ddd] text-[17px]'>View Package</button>
</Link>

    </div>
    
    
    
    )
})
}
</div>

<div className='my-4'>
<button onClick={() => setShowAll(seeData.length)} className={`bg-orange-400 px-4 py-3 rounded-md font-bold text-black block mx-auto hover:bg-[#ddd] text-[17px] ${show == seeData.length && "hidden"}`}>All View Package</button>
</div>
  </> 
}





</div>

</div>
        </div>
    );
};

export default Tourcategory;