import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { GoDotFill } from "react-icons/go";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
const image_hosting_key = import.meta.env.VITE_HOSTING_API


const SinglePage = () => {
 const navigates = useNavigate()
const {user} = useContext(AuthContext)
const {id} = useParams()
const [loading, setLoading] = useState(true)
const [seeData, setSeedata] = useState([])

console.log(id)

// ............................................


useEffect(() => {
    setLoading(true)
fetch(`https://mytour-two.vercel.app/travelpackageshee/${id}`)
.then(res => res.json())
.then(data => {
    setSeedata(data)
     setLoading(false)

}) 
}, [id])







const addbookingNow = (e) => {

e.preventDefault();

const form = e.target;
const touristName = form.touristName.value;
const touristEmail = form.touristEmail.value;
const toristImage = form.toristImage.files[0];
const touristPrice = form.touristPrice.value;
const tourDate = form.tourDate.value;
const tourGuidename = form.tourGuidename.value;

form.reset()


if(!touristName || !touristEmail || !toristImage || !touristPrice || !tourDate || !tourGuidename){
    Swal.fire("Please Form Fill Up");

        return 
    }


const data = new FormData()
data.append("image", toristImage)
fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`, {
method: "POST",
body: data
})
.then(res => res.json())
.then(d => {
   

 
    if(tourGuidename == "tourguide"){


          
    const alldata2 = {
      
        idNum: seeData?.idNum,
        touristName, 
        touristEmail,
        toristImage: d.data.display_url,
        touristPrice,
        tourDate,
        tourGuidename,
        trip_name: seeData?.trip_name,
 
    
     }


     Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, booking it!"
      }).then((result) => {
        if (result.isConfirmed) {


        fetch("https://mytour-two.vercel.app/touradd", {
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(alldata2)
            })
            .then(res => res.json())
            .then(() => {
            navigates("/tourguide");
              
            })
            


    return

          
        }
      });



    
    }



else {  


const alldata = {
    idNum: seeData?.idNum,
    userEmail: user?.email,
    touristName, 
    touristEmail,
    toristImage: d?.data.display_url,
    touristPrice,
    tourDate,
    tourGuidename,
    trip_name: seeData?.trip_name,
  

 }




 Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Booking it!"
  }).then((result) => {
    if (result.isConfirmed) {



        if(user?.email){

            fetch("https://mytour-two.vercel.app/touradd", {
                method: "POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(alldata)
                })
                .then(res => res.json())
                .then(() => {
        
        
                navigates("/userdashboard/mybookings")
                
                })
                
    
        }

        else {

            navigates("/login")
            
        }
        

     


    }
  });


    
return

    }




})





}





    return (
<div>

<Helmet>
  <title>Single - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>
<div className="xl:mx-[240px] lg:mx-[150px] md:mx-[50px] mx-[5px] my-20 font-Assistant">

<h2 className="text-center font-bold my-6 text-[20px]">Tour Package Details</h2>

<div className="border-[1px] rounded-md xl:w-[90%] lg:w-[90%] w-[100%] mx-auto p-5">
    <h2 className="my-4 font-Assistant text-center text-[20px] font-bold">Gallery</h2>
{

loading ? <div className='flex justify-center my-6 h-[200px]'><span className="loading loading-spinner loading-md"></span></div>  :


<div className="grid w-[100%] grid-cols-2">

{

seeData.tour_gallery.map((tourimage, index) => {
    return(<div key={index}>
 <div className="w-full">
    <img className="xl:h-[450px] lg:h-[350px] h-[250px]   w-[100%]"  src={tourimage} alt="" />
      </div>
    
    </div>)
})
}

{

loading ? <div className='flex justify-center my-6 h-[200px]'><span className="loading loading-spinner loading-md"></span></div> : <>
<img className="xl:h-[450px] lg:h-[350px] h-[250px] w-full rounded-md" src={seeData?.tour_image} alt="" />
</>
}

</div>
}
</div>
  

{/* ..................... */}

<div className="mt-[100px] xl:w-[90%] lg:w-[90%] w-[100%] mx-auto">
<h2 className="my-2 font-Assistant font-bold">Tour Plan</h2>

    {

        seeData.length == 0 ? "" :
        
        seeData?.DayPlans?.map((d, index) => {

            return(

             <div key={index}>
                
             <details>
              <summary className="w-full cursor-pointer my-2 border-green-100 border-[1px] bg-[#f9f9f9] font-Assistant rounded-md p-4"><span className="font-bold text-green-500">Day: </span>{d.day_number}</summary>  

              {
                d?.activities?.map((da, index) => {

                 return(
                 
                   <div key={index} className="flex gap-1 items-center"><GoDotFill className="text-[14px] rounded-full"></GoDotFill><p className="font-Assistant font-medium space-y-4">{da}</p>
                   </div> )
                })
              }

               
            </details>

       

 
             </div>
       

       
              


            )
        })
    }



</div>

{
    seeData.length <= 0 ? "" : 
<div className="border-[1px] bg-[#0ABDE3] shadow-lg xl:w-[80%] w-[100%] lg:w-[80%] mx-auto font-Assistant p-4 mt-20 rounded-md">
    <h2 className="font-bold text-center my-4 text-white">Booking</h2>
<form onSubmit={addbookingNow} className="w-[90%] mx-auto">

<div className="my-4">
<label htmlFor="touristname" className="font-Assistant text-white font-bold">Tourist Name: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" defaultValue={user?.displayName} type="text" placeholder="Write Your Tourist Name:" id="touristname" name="touristName" />
</div>

<div className="my-4">
<label htmlFor="touristEmail" className="font-Assistant text-white font-bold">Tourist Email: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" id="touristEmail" defaultValue={user?.email} type="email" placeholder="Write Your Tourist Email:" name="touristEmail" />
</div>

<div className="my-4">
  <label htmlFor="image" className="font-Assistant text-white font-bold">Tourist Image: </label>
  <input id="image" className="w-full rounded-md my-2 outline-none" name="toristImage" type="file" />
</div>


<div className="my-4">
<label htmlFor="price" className="font-Assistant text-white font-bold">Price: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" defaultValue={seeData?.price} type="price" id="price" placeholder="Price: " name="touristPrice" />
</div>

<div className="my-4">
    <label htmlFor="tourDate" className="font-Assistant text-white font-bold">Tour Date:</label>
<input id="tourDate" className="w-full border-[1px] rounded-md p-4 my-2 outline-none cursor-pointer" type="date" name="tourDate" />

</div>

<div className="border-[1px] w-max p-2 my-4 rounded-md font-bold">
<label htmlFor="tourGuide" className="font-Assistant text-white font-bold">Tour Guide Name: </label>
<select id="tourGuide" className="outline-none" name="tourGuidename">
  
    {
        user ? <option value="tourist">Tourist</option> : 
        <>  <option value="tourist">Tourist</option>
        <option value="tourguide">Tour Guide</option> </> 
    }


</select>
</div>

<input className="px-6 font-Assistant font-bold text-white rounded-md py-3 bg-orange-500 cursor-pointer hover:bg-orange-600 block mx-auto" type="submit" value="Booking Now" />

</form>
</div>
}





</div>
</div>
);
};

export default SinglePage;