import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";


const MyProfile = () => {

    const {user} = useContext(AuthContext)

    console.log(user)



    return (
        <div className="font-Assistant my-4 p-5"> 
        <h2 className="font-bold text-center">MyProfile</h2>
            <div className="border-[1px] rounded-md p-1">
                <img className="w-[100px] rounded-md h-[100px]" src={user?.photoURL} alt="profile" />

                <div className="mt-10">
                    <h2 className="font-bold">Name: {user?.displayName}</h2>
                    <h2><span className="font-bold">Email:</span> {user?.email}</h2>
                </div>
         
            </div>
           

            <div>


            </div>



        </div>
    );
};

export default MyProfile;