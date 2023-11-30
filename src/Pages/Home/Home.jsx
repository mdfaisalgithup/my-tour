import { useContext, useEffect, useState } from 'react';

import 'react-tabs/style/react-tabs.css';

import { FaHeart } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { Helmet } from 'react-helmet';


const Home = () => {
const [seeData, setData] = useState([])
const [show, setShowAll] = useState(3)

const [loading, setLoading] = useState(true)
const {user} = useContext(AuthContext)

let [sliderLength, setSliderLength] = useState(0)

const navigate = useNavigate()




useEffect(() => {
  setLoading(true)
fetch("https://mytour-two.vercel.app/travelpackage")
.then(res => res.json())
.then(data => {
setLoading(false)
  setData(data)

})
}, [])



const myHeart = (id) => {


  const dataQuery = {
  userEmail: user?.email,
  idNum: id?.idNum,
  tour_image: id?.tour_image,
  tour_type: id?.tour_type,
  tour_category: id?.tour_category,
  DayPlans: id?.DayPlans,
  tour_gallery: id?.tour_gallery,
  trip_name: id?.trip_name,
  price: id?.price 

}

  
  fetch("https://mytour-two.vercel.app/myheart", {

  method: "POST",
  headers: {"content-type" : "application/json"},
  body: JSON.stringify(dataQuery)
  })
  .then(res => res.json())
.then(() => {


})





}




const catagory = [
  [{image: "https://i.ibb.co/GRS4TCM/Sydney-Opera-Housecc-Flickr-Ed-Mc-Culloch.jpg", tourName: "Architecture"}, 
  {image: "https://i.ibb.co/wpyfd5P/pngegg-3.png", tourName: "Wildlife"}, {image: "https://i.ibb.co/SfHZTXk/pngegg-4.png", tourName: "Sightseeing"}], 

[{image: "https://i.ibb.co/wwSb2xZ/pngegg.png", tourName: "Culture"}], 

[{image: "https://i.ibb.co/GRS4TCM/Sydney-Opera-Housecc-Flickr-Ed-Mc-Culloch.jpg", tourName: "Adventure"}, {image: "https://i.ibb.co/wwSb2xZ/pngegg.png", tourName: "Culture"}]
]


const next =  () => {

sliderLength = sliderLength + 1
if(sliderLength <= catagory.length-1){

  setSliderLength(sliderLength)

}
else {
sliderLength = 0
setSliderLength(sliderLength)

}

}

const prev = () => {

  sliderLength = sliderLength - 1
  if(sliderLength >= 0){
    setSliderLength(sliderLength)


  }

else {

  setSliderLength(catagory.length - 1)

}


}

const goTo = (id) => {

 
  navigate(`/catagorytour?id=${id}`)




}


    return (

<div>  

  <Helmet>
  <title>Home - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>

<div className="relative bg-[#00000020]">
<div className="h-[800px]">
<img className="w-full h-full opacity-20" src="https://i.ibb.co/8jJcBLj/susan-q-yin-Imo-Vrh-UBe-Fs-unsplash.jpg" alt="banner" />
</div>


<div className="absolute w-full z-20 h-full items-center top-0 flex justify-center font-Assistant">
<div className="xl:w-1/2">
    <h2 className="text-center font-bold text-black
     xl:text-[50px] lg:text-[30px] md:text-[20px] text-[20px]">Arrival and Introduction to <span className="text-orange-600">London</span></h2>
    
    <div className="p-6">
    <p className="text-black text-center xl:text-[20px] lg:text-[17px] md:text-[18px] text-[16px]">Upon arrival, our expert guide welcomes you to London, setting the tone for an incredible adventure ahead. After settling in, we embark on a panoramic city tour, passing iconic landmarks like Buckingham Palace, Westminster Abbey, and the Houses of Parliament. Marvel at the architectural splendor and hear captivating stories behind these historic sites.</p>
    </div>
    <button className="bg-orange-500 text-[20px] px-6 py-3 font-bold  hover:bg-[#FFFFFF] block mx-auto">View Tour</button>
  
</div>
</div>


</div>


{/* ............. */}




<div className="xl:mx-[240px] lg:mx-[200px] md:mx-[50px] mx-[10px] my-20 font-Assistant">


<h2 className='text-center text-[20px] font-bold my-6'>Grand Adventure Across Asia: Exploring Rich Cultures, Landscapes, and Heritage</h2>

<div className='xl:w-[60%] lg:w-[90%] md:w-[90%] w-[100%] mx-auto'>
<p className='text-center'>
Embark on an awe-inspiring 21-day journey through Asia, encompassing a mosaic of cultures, ancient civilizations, and natural wonders. This meticulously designed tour promises an immersive experience, offering a glimpse into the diverse tapestry of Asia's history, traditions, and breathtaking landscapes.
</p>

</div>




</div>

{/* ................Our Packages */}

<div className='xl:mx-[240px] lg:mx-[150px]  md:mx-[50px] mx-[10px]  font-Assistant my-30'>
<h2 className='text-center font-bold text-[20px] my-6'>Our Packages</h2>

<div>
{
  loading ? <div className='flex justify-center h-[200px]'><span className="loading loading-spinner loading-md"></span></div>
  
  
  :   <>


<div className='xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  grid gap-4'>
{
seeData.slice(0, show).map((d, index) => {

    return(
    <div key={index} className='font-Assistant rounded-md border-[1px] p-4'>
     
     <div className='relative'>
         <img className='w-full rounded-md object-cover h-[300px]' src={d.tour_image} alt="" />
       <div className='absolute right-0 top-0 p-2'>
       <button onClick={() => myHeart(d)}><FaHeart className='text-[20px] text-orange-500 hover:text-orange-600'></FaHeart></button>
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

{/* .............. */}

<div className='xl:mx-[240px] xl:mt-[100px] font-Assistant'>


 <h2 className='font-bold text-[20px] text-center mt-6'>Tour Categoray</h2>
<div className='xl:w-[80%] lg:w-[70%] bg-slate-50 mx-auto  my-10 h-[500px]  relative'>
 
<div className='flex w-full justify-center gap-6 items-center h-full '>
{
  catagory[sliderLength].map((d, index) => {



    return(

    <div key={index}>

    <button onClick={() => goTo(d?.tourName)} className='cursor-pointer'><img className='xl:w-[200px] xl:h-[200px] border-2  xl:rounded-full' src={d.image} alt="" /></button>
    </div>

    
    
    )
  })

}
</div>



<div className='absolute left-[5px] top-[45%]'>
<GrFormPrevious onClick={prev} className='text-white cursor-pointer hover:bg-orange-500 rounded-full bg-orange-200 p-2 text-[45px]'></GrFormPrevious>
</div>

<div className='absolute top-[45%] right-[5px]'>
<MdOutlineNavigateNext onClick={next} className='text-white cursor-pointer hover:bg-orange-500 rounded-full bg-orange-200 p-2 text-[45px]'></MdOutlineNavigateNext>
</div>







</div>
</div>


</div>

    );
};

export default Home;