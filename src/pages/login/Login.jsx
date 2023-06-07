import { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || "/";


    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password)
        .then(result =>{
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
        navigate(from, { replace: true});
        })
        .catch(error =>{
            console.log(error);
        })
    };
    return (
        <div className="bgImageLogin hero min-h-screen bg-base-200">
      <div className="hero-content mt-20 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold px-10">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <Form  onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              New to please {" "}
              <Link to="/signUp">
                <span className="text-purple-600 font-semibold">SignUp</span>
              </Link>
            </a>
          </Form>
        </div>
      </div>
    </div>
    );
};

export default Login;