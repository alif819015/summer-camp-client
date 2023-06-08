import { Link, useRouteError } from "react-router-dom";
import img from '../../assets/error.png';

const Error = () => {
  const error = useRouteError();
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
      <img className="w-4/5 md:w-3/5 mx-auto mb-5" src={img} alt="" />
      <div className="text-center">
        <p className="text-pink-600 font-semibold">
          {" "}
          Sorry, an unexpected error has occurred.
        </p>
        <p>
          <i className="text-purple-600">{error.statusText || error.message}</i>
        </p>
        <div className="mt-5 flex justify-center">
          <Link to="/">
            <button className="bg-orange-600 px-4 py-2 rounded-md text-white font-bold flex items-center">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
