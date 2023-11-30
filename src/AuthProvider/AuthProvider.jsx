import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null)


const registerCurrent = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


useEffect(()=> {
    const userAuth = onAuthStateChanged(auth, (user) => {
            setUser(user)

       
      })


      return () => userAuth()
}, [])


const logout = () => {

    signOut(auth).then(() => {
       
      }).catch(() => {
        

      });
}

const loginNow = (email, password) => {

return signInWithEmailAndPassword(auth, email, password)
  
}

const googleProvider = new GoogleAuthProvider()


const googleAuthOpen = () => {

    return signInWithPopup(auth, googleProvider)
}





const userInfo = {

    registerCurrent,
    user,
    logout,
    loginNow,
    googleAuthOpen,
 
}




    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;