import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bgImage hero min-h-screen bg-base-200">
      <div className="hero-content mt-20 flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold px-10">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <a href="#" className="label-text-alt link link-hover text-center">
              New to please {" "}
              <Link to="/Sign up">
                <span className="text-purple-600 font-semibold">SignUp</span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;