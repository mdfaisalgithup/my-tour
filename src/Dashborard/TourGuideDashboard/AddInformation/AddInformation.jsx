import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";



const AddInformation = () => {
    const {id} = useParams()
const [dataShow, setdataShow] = useState([])


const navigate = useNavigate();

useEffect(() => {

fetch(`https://mytour-two.vercel.app/tourguideupdate/${id}`)
.then(res => res.json())
.then(d => {
setdataShow(d)

})

}, [])


console.log("DFgfdg")
const addTnformation = (e) => {
e.preventDefault();

const form = e.target;
const  fullname = form.fullname.value
const  imageprofile = form.imageprofile.value
const  contact = form.contact.value
const  education = form.education.value
const  workExperience = form.workExperience.value
const  skill = form.skill.value


if(!fullname || !imageprofile || !contact || !education || !workExperience || !skill){


    alert("Empty Field")
    return
}


const alldata = {
 _id: dataShow._id,
fullname,
imageprofile,
contact,
education,
workExperience,
skill
}

fetch("https://mytour-two.vercel.app/tourguideupdate", {

method: "PATCH", 
headers: {"content-type" : "application/json"},
body: JSON.stringify(alldata)
})
.then(res => res.json())
.then(d => {
    if(d?.modifiedCount > 0){

navigate("/tourguide")
    }

    

    console.log(d)
})

console.log(alldata)



}








    return (
        <div className="my-10 flex justify-center">
            <div>
                <form className="border-[1px] p-6 rounded-md bg-[#0ABDE3]" onSubmit={addTnformation}>

              <div className="flex gap-4">

             
               <div>
               <div>
               <label className="font-bold text-white" htmlFor="fullname">Profile Name:</label>
                <input defaultValue={dataShow?.fullname} className="font-semibold my-2 rounded-md font-Assistant p-4 outline-none border-[1px] w-full" type="text" placeholder="Write your full Name:" id="fullname" name="fullname" />
               </div>
                
                <div>
                <label className="font-bold text-white" htmlFor="profileImage">Profile Photo:</label>
                <input defaultValue={dataShow?.imageprofile} className="font-semibold my-2 rounded-md  font-Assistant p-4 outline-none border-[1px] w-full" type="text" placeholder="profile picture Link:" id="profileImage" name="imageprofile" />
                </div>
                
                <div>
                <label className="font-bold text-white" htmlFor="contact">Contact Details:</label>
                <textarea defaultValue={dataShow?.contact} className="font-semibold my-2  rounded-md font-Assistant p-4 outline-none border-[1px] w-full" type="text" placeholder="Write your contact details:" id="contact" name="contact" />
                </div>


               </div>


                <div>
                <div>
               <label className="font-bold text-white" htmlFor="education">Education Details:</label>
               <textarea defaultValue={dataShow?.education} className="font-semibold my-2  rounded-md font-Assistant p-4 outline-none border-[1px] w-full" type="text" placeholder="Write your education:" id="education" name="education" />
               </div>

              <div>
              <label className="font-bold text-white" htmlFor="skill">Skills:</label>
              <textarea defaultValue={dataShow?.skill} className="font-semibold my-2  rounded-md font-Assistant p-4 outline-none border-[1px] w-full" type="text" name="skill" id="skill" placeholder="Write your skills:" />
              </div>

              <div>
              <label className="font-bold text-white" htmlFor="workexperience">Work Experience:</label>
                <textarea defaultValue={dataShow?.workExperience} className="font-semibold my-2  rounded-md font-Assistant p-4 outline-none border-[1px] w-full" type="text" name="workExperience" id="workexperience" placeholder="Write your work experience:" />
              </div>
                </div>
                </div>

                


               <input className="px-4 my-4 py-2 text-white font-Assistant font-bold bg-orange-500 block mx-auto rounded-md hover:bg-orange-600 cursor-pointer" type="submit" value="Submit" />
             
                    </form>
                
            </div>
            
        </div>
    );
};

export default AddInformation;