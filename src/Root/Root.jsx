import { Outlet } from "react-router-dom";
import NavBar from "../page/NavBar/NavBar";
import Footer from "../page/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
