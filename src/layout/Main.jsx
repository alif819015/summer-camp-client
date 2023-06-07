import { Outlet } from "react-router-dom";
import NavBar from "../pages/navBar/NavBar";
import Footer from "../pages/footer/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;