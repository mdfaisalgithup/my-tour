import Swal from "sweetalert2";
import cryptoRandomString from 'crypto-random-string';

const AddPackage = () => {

    const idNum = cryptoRandomString({length: 17, type: 'url-safe'});
const addPackageNow = (e) => {
e.preventDefault()
const form = e.target;

const trip_name = form.tripName.value;
const tour_type = form.tourtype.value;

const category_name = form.categoryname.value;

const category_image = form.categoryimage.value
const tour_image = form.tour_image.value

const tourDaynum1 = form.tourDaynum1.value;
const activities01 = form.activities01.value;
const activities02 = form.activities02.value;


const tourDaynum2 = form.tourDaynum2.value;
const activities04 = form.activities01.value;
const activities03 = form.activities02.value;




const toristGallery1 = form.toristGallery1.value
const toristGallery2 = form.toristGallery2.value
const toristGallery3 = form.toristGallery3.value
const price = parseFloat(form.touristPrice.value);


form.reset()

if(!trip_name || !tour_type ||
    !category_name ||
    !category_image ||
    !tour_image ||
    !tourDaynum1 ||
    !activities01 ||
    !activities02 ||
    !tourDaynum2 ||
    !activities04 ||
    !activities03 ||
    !toristGallery1 ||
    !toristGallery2 ||
    !toristGallery3 || !price)

 
    
    {


Swal.fire("Please fill your form. Submit all information")
   return
        
    }







 const addAllData = {
    idNum,
    trip_name,
    tour_type,
    tour_image,
    tour_category : {category_name, category_image},
    
    DayPlans: [
    {day_number: tourDaynum1, activities: [activities01, activities02]},
    {day_number: tourDaynum2, activities: [activities03, activities04]},
    ],
    tour_gallery: [toristGallery1, toristGallery2, toristGallery3],
    price,
    }
    

    fetch("https://mytour-two.vercel.app/travelpackageadd", {

    method: "POST",
    headers: {'content-type' : "application/json"},
    body: JSON.stringify(addAllData)
    })
    .then(res => res.json())
    .then(() => {

        Swal.fire("Your information has been successfully submitted")

        return

        
    })


 


}

    return (
        <div className="my-4">
            
           <div className="border-[1px] bg-[#0ABDE3] shadow-lg w-[90%] mx-auto font-Assistant p-4 mt-20 rounded-md">
    <h2 className="font-bold text-center">Add Package</h2>
<form onSubmit={addPackageNow} className="w-[90%] mx-auto">



<div className="my-4">
<label htmlFor="tripName" className="font-Assistant text-white font-bold">Trip Name: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Trip Name:" id="tripName" name="tripName" />
</div>

<div className="my-4">
<label htmlFor="tourtype" className="font-Assistant text-white font-bold">Tour Type: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your tourtype:" id="tourtype" name="tourtype" />
</div>

{/* .............. */}
<div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Tour Category Name: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Category Name:" id="category_name" name="categoryname" />
</div>


<div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Category Image: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Category Image Link:" id="category_name" name="categoryimage" />
</div>


<div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Tour Image: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Image Link:" id="category_name" name="tour_image" />
</div>


{/* .................. */}



<div className="my-4 border-2 p-2">
    
<h2 className="font-bold text-white my-2 text-center">DayPlans</h2>
<label htmlFor="tourDaynum1" className="font-Assistant text-white font-bold">Tour Day Number 1: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Day Number 1:" id="tourDaynum1" name="tourDaynum1" />
<label htmlFor="activities01" className="font-Assistant text-white font-bold">Tour Activities 1: </label>
<input className="w-full border-[1px] rounded-md p-2 my-2 outline-none" type="text" placeholder="Write Your Tour Activities 1:" id="activities01" name="activities01" />
<label htmlFor="activities02" className="font-Assistant text-white font-bold">Tour Activities 1: </label>
<input className="w-full border-[1px] rounded-md p-2 my-2 outline-none" type="text" placeholder="Write Your Tour Activities 2:" id="activities02" name="activities02" />


<div className="my-4">
<label htmlFor="tourDaynum2" className="font-Assistant text-white font-bold">Tour Day Number 2: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Day Number 2:" id="tourDaynum2" name="tourDaynum2" />

<label htmlFor="activities03" className="font-Assistant text-white font-bold">Tour Activities 1: </label>
<input className="w-full border-[1px] rounded-md p-2 my-2 outline-none" type="text" placeholder="Write Your Tour Activities 1:" id="activities03" name="activities03" />
<label htmlFor="activities4" className="font-Assistant text-white font-bold">Tour Activities 2: </label>
<input className="w-full border-[1px] rounded-md p-2 my-2 outline-none" type="text" placeholder="Write Your Tour Activities 2:" id="activities4" name="activities4" />
</div>



</div>

{/* ...... */}




<div className="my-4">
  <label htmlFor="image" className="font-Assistant text-white font-bold">Tourist Gallary Image: </label>

   <div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Gallary Image 1: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Image Link 1:" id="category_name" name="toristGallery1" />
</div>

   <div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Gallary Image 2: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Image Link 2:" id="category_name" name="toristGallery2" />
</div>


<div className="my-4">
<label htmlFor="category_name" className="font-Assistant text-white font-bold">Gallary Image 3: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="text" placeholder="Write Your Tour Image 3 Link:" id="category_name" name="toristGallery3" />
</div>



</div>






<div className="my-4">
<label htmlFor="price" className="font-Assistant text-white font-bold">Price: </label>
<input className="w-full border-[1px] rounded-md p-4 my-2 outline-none" type="price" id="price" placeholder="Price: " name="touristPrice" />
</div>



<input className="px-6 font-Assistant font-bold text-white rounded-md py-3 bg-orange-500 cursor-pointer hover:bg-orange-600 block mx-auto" type="submit" value="Add Package" />

</form>
</div>
        </div>
    );
};

export default AddPackage;