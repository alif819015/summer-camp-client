import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const InstructorHome = () => {
    const { user } = useContext(AuthContext);
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-black font-bold">
            Welcome to: {user?.displayName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
