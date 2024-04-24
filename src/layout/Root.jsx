import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div className="font-raleway">
         <Header></Header>
         This is root page
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;