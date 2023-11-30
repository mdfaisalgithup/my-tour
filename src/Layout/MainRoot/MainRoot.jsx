import { Outlet } from "react-router-dom";
import Header from "../../SharePage/Header/Header";
import Footer from "../../SharePage/Footer/Footer";


const MainRoot = () => {

    


    return (
   <>

 
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
   
   
   </>
    );
};

export default MainRoot;