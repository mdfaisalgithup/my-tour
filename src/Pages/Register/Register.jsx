
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase.config";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const image_hosting_key = import.meta.env.VITE_HOSTING_API

const auth = getAuth(app)

const Register = () => { 

 const {registerCurrent, googleAuthOpen} = useContext(AuthContext)
  const navigate = useNavigate()
const location = useLocation()


    const registerSubmit = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const profileimage = form.Profileimage.files[0];
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password_Current.value;
         form.reset()  
         
         if(!profileimage || !name || !email || !password){
         
        Swal.fire("Your information is empty, please enter again")
         return

         }

         if(password.length <= 6){

            Swal.fire("You must be more than 6 characters.")
         return
         }

        const data = new FormData()
        data.append("image", profileimage)
    

      
 fetch(`https://api.imgbb.com/1/upload?key=${image_hosting_key}`, {
        method: "POST",
        body: data

     })
     .then(res => res.json())
     .then((d) => {
      
   
     

        const userData = {
          profileImage:  d.data.display_url, Name: name, Email: email, password: password }
        fetch("https://mytour-two.vercel.app/register", {

         method: "POST",
         headers: {"content-type": "application/json"},
         body: JSON.stringify(userData)
        }).then(res => res.json())
        .then(afterResult => {
          
      if(afterResult.insertedId == 0){

        location.state ? navigate(location.state) : navigate(location.pathname)
        console.log(afterResult.insertedId)
        Swal.fire("Already Email Registered. Another Email Try it")
      }

      
      else {

        
        


    // ..........................................

   registerCurrent(email, password)
   .then(() => {

    // ..............
     updateProfile(auth.currentUser, {
         displayName: name, 
         photoURL: d.data.display_url 
     }).then()  
    
//  ................

 location.state ? navigate(location.state) : navigate("/")
    
    })
    .catch(error => {

     Swal.fire(error.message)
    })

    //  ...........................


         
      }




      })

      .catch(error => {

        Swal.fire(error.message)
      })

// ........................


    
    
    })


      

    }


  const registerNow = () => {

    
    googleAuthOpen()
    .then(() => {
      location.state ? navigate(location.state) : navigate("/")
   
    })



  }




    return (
       <div>
        <Helmet>
  <title>Register - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>


         <div className="xl:mx-[240px] lg:mx-[150px] mx-[10px] min-h-[80vh] flex items-center font-Assistant">
           
           <div className="xl:w-1/2 lg:w-[60%] border-[1px] rounded-md mx-auto p-6 bg-[#0abde3]">
           <h2 className="font-bold text-[20px] text-center text-white">Register</h2>
            <form onSubmit={registerSubmit}>



                <div className="my-6">  
                <div>
                <label className="font-bold text-white" htmlFor="Profileimage">Profile Image:</label>
                </div>
                <input className="cursor-pointer my-[4px]" type="file" name="Profileimage" id="Profileimage" />
                </div>



                <div>  
                <label className="font-bold text-white" htmlFor="name">Name:</label>
                <input className="outline-none w-full font-semibold my-2 p-4 border-[1px] rounded-md" type="text" placeholder="Write Your Name" name="name" id="name" />
                </div>
                

                <div>  
                <label className="font-bold text-white" htmlFor="email">Email:</label>
                <input className="outline-none w-full font-semibold my-2 p-4 border-[1px] rounded-md" type="email" placeholder="Write Your Email" name="email" id="email" />
                </div>

                <div>
                <label className="font-bold text-white" htmlFor="password">Password:</label>
                <input className="outline-none font-semibold w-full my-2 p-4 border-[1px] rounded-md" type="password" placeholder="Write Your Password" name="password_Current" id="password" />
                </div>

                <span className="font-semibold text-white">Are You Registered?</span><Link to="/login" className="text-white font-bold hover:text-[#576574]"> Please Login Now</Link>


                <input className="px-6 text-[20px] py-3 rounded-md font-bold block hover:bg-[#72889f] mx-auto bg-[#576574] cursor-pointer text-white" type="submit" value="Register" />
                
            </form>

            <div className="mt-10">
              <h2 className="font-bold my-2 text-center text-white">Or Social Sign In</h2>
              <div className="w-max mx-auto">
                <button onClick={registerNow} className="border-2 border-white rounded-full p-[3px]"><FaGoogle className="text-[25px]"></FaGoogle></button>
              </div>

            </div>
            
           </div>
        </div>
       </div>
    );
};

export default Register;