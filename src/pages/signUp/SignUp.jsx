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

  const onSubmit = async (data) => {
    try {
      if (!/^.{6,}$/.test(data.password)) {
        throw new Error(
          "Please provide at least 6 characters for the password."
        );
      }

      if (!/(?=.*[A-Z])/.test(data.password)) {
        throw new Error(
          "The password field needs to add at least one Uppercase."
        );
      }

      if (!/(?=.*[!@#$&*])/.test(data.password)) {
        throw new Error(
          "The password field needs to add at least one special character."
        );
      }

      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);
      setError("");
      setSuccess("");

      await updateUserProfile(data.name, data.photoURL);

      const saveUser = { name: data.name, email: data.email };

      const response = await fetch(
        "https://assignment-12-summer-camp-server.vercel.app/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        }
      );

      const responseData = await response.json();

      if (responseData.insertedId) {
        reset();
        setSuccess("User has been created successfully");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
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
