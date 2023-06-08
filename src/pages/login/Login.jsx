import { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { loginUser, googleLogin, githubUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const from = location.state?.from?.pathName || "/";

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
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
          title: "User Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    githubUser()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bgImageLogin hero min-h-screen bg-base-200">
      <div className="hero-content mt-20 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold px-10">Please Login!</h1>
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
              <button
                className="absolute right-0 mt-12 mr-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEye className="text-xl"></FaEye>
                ) : (
                  <FaEyeSlash className="text-xl"></FaEyeSlash>
                )}
              </button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              New to please{" "}
              <Link to="/signUp">
                <span className="text-purple-600 font-semibold">SignUp</span>
              </Link>
            </a>
            <div className="divider">OR</div>
            <div className="flex gap-4 text-3xl mx-auto">
              <FaGoogle
                onClick={handleGoogle}
                className="text-blue-600"
              ></FaGoogle>
              <FaGithub onClick={handleGithub}></FaGithub>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
