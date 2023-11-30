import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Login = () => {

const {loginNow, googleAuthOpen } = useContext(AuthContext)
const navigate = useNavigate()
const location = useLocation()

const login = (e) => {
e.preventDefault();
const form = e.target;
const email = form.email.value;
const password = form.password.value;
form.reset()

const datas = {email}




if(!email || !password){
         
  Swal.fire("The information you provided remains, fill the form below again");
  return

  }


fetch("https://mytour-two.vercel.app/manageuserstatus", {
method: "POST",
headers: {"content-type": "application/json"},
body: JSON.stringify(datas)
})
.then(res => res.json())
.then(d => {

  if(d?.status === "admin"){
    console.log(d)

    navigate("/admindashboard")
    return

  }

  // https://mytour-two.vercel.app


  else {

    
  loginNow(email, password)
  .then(res => {
    console.log(res.user)
    location.state ? navigate(location.state) : navigate("/")
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
   
  });
  

  }


})







}


const googleLogin = () => {

  googleAuthOpen()
  .then(() => {
    
    location.state ? navigate(location.state) : navigate("/")
  
  })

}





    return (
       <>
       <Helmet>
  <title>Login - My Tour Best Service in world</title>
  <link rel="canonical" href="https://i.ibb.co/KV1T2S3/pngwing-com.png" />
  </Helmet>



       <div className="xl:mx-[240px] lg:mx-[150px] mx-[10px] min-h-[80vh] flex items-center font-Assistant">
           
           <div className="xl:w-1/2 lg:w-full border-[1px] rounded-md mx-auto p-6 bg-[#0abde3]">
           <h2 className="font-bold text-[20px] text-center text-white">Login</h2>
            <form onSubmit={login}>

                <div>  
                <label className="font-bold text-white" htmlFor="email">Email:</label>
                <input className="outline-none w-full font-semibold my-2 p-4 border-[1px] rounded-md" type="email" placeholder="Write Your Email" name="email" id="email" />
                </div>

                <div>
                <label className="font-bold text-white" htmlFor="password">Password:</label>
                <input className="outline-none font-semibold w-full my-2 p-4 border-[1px] rounded-md" type="password" placeholder="Write Your Password" name="password" id="password" />
                </div>

                <span className="font-semibold text-white">Are You Registered?</span><Link to="/register" className="text-white font-bold hover:text-[#576574]"> Please Register Now</Link>


                <input className="px-6 text-[20px] py-3 rounded-md font-bold block hover:bg-[#72889f] mx-auto bg-[#576574] cursor-pointer text-white" type="submit" value="Login" />
                
            </form>

            <div className="mt-10">
              <h2 className="font-bold my-2 text-center text-white">Or Social Sign In</h2>
              <div className="w-max mx-auto">
                <button onClick={googleLogin} className="border-2 border-white rounded-full p-[3px]"><FaGoogle className="text-[25px]"></FaGoogle></button>
              </div>

            </div>
            
           </div>
        </div>
       
       
       </>
    );
};

export default Login;