import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";

const Main = () => {
  const location = useLocation();
//   console.log(location)
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter ||  <Footer></Footer>}
    </div>
  );
};

export default Main;
