import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/Signup";
import Error from "../components/error/Error";
import AllClass from "../pages/home/allClass/AllClass";
import AllInstructor from "../pages/home/allInstractore/AllInstructor";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/myCart/MyCart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/logIn',
          element: <Login></Login>
        },
        {
          path:'/signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'/error',
          element: <Error></Error>
        },
        {
          path:'/allClass',
          element: <AllClass></AllClass>
        },
        {
          path:'/allInstructor',
          element: <PrivateRoute><AllInstructor></AllInstructor></PrivateRoute>
        },
      ]
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);