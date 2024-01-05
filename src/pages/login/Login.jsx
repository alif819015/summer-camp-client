/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { Form, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const { user, loginUser } = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathname || "/";

  console.log(from,location)
  

  const {
    register,
    reset,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if(user?.uid){
    return <Navigate to={from}/> 
  }

  return (
    <div className="bgImagelogin hero min-h-screen bg-base-200">
      <div className="hero-content mt-20 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold px-10">Please login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              <p
                className="absolute right-0 mt-12 mr-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-xl"></FaEye>
                ) : (
                  <FaEyeSlash className="text-xl"></FaEyeSlash>
                )}
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">login</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              New to please{" "}
              <Link to="/signUp">
                <span className="text-purple-600 font-semibold">SignUp</span>
              </Link>
            </a>
          </Form>
            <div className="divider">OR</div>
            <div className=" mb-8 flex gap-4 text-3xl mx-auto">
            <SocialLogin></SocialLogin>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
