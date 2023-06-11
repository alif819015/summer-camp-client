import { Form, Link, useNavigate } from "react-router-dom";
import "../signUp/SignUp.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (!/^.{6,}$/.test(data.password)) {
      setError("Please provide at list 6 character");
      return;
    }

    if (!/(?=.*[A-Z])/.test(data.password)) {
      setError("Please at least add one Uppercase");
      return;
    }

    if (!/(?=.*[!@#$&*])/.test(data.password)) {
      setError("Please at least add one special character");
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setError("");
      setSuccess("");

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = {name: data.name, email: data.email}
          fetch("http://localhost:5000/users",{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User Created Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          setSuccess("User Has ben created success fully");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };

  return (
    <div className="bgImageSignUp hero min-h-screen bg-base-200">
      <div className="hero-content mt-20 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-black font-bold px-10">
            Please Sign Up!
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <Form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="photo"
                placeholder="Photo url"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
            </div>

            {/* TODO  */}
            <div className="form-control">
              <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              />
            </div>
            <a className="text-red-600 text-center">
              <p>{error}</p>
            </a>
            <a className="text-green-600 text-center">
              <p>{success}</p>
            </a>
            <a href="#" className="label-text-alt link link-hover text-center">
              Already have an account{" "}
              <Link to="/login">
                <span className="text-purple-600 font-semibold">login</span>
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

export default SignUp;
