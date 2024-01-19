import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { googleLogin, githubUser } = useContext(AuthContext);

  const handleGoogle = async () => {
    try {
      const result = await googleLogin();
      const loggedUser = result.user;
      console.log(loggedUser);

      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };

      const response = await fetch(
        "https://assignment-12-summer-camp-server.vercel.app/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        }
      );

      const data = await response.json();
      if (data.insertedId) {
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGithub = async () => {
    try {
      const result = await githubUser();
      const loggedUser = result.user;
      console.log(loggedUser);

      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };

      const response = await fetch(
        "https://assignment-12-summer-camp-server.vercel.app/users",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        }
      );

      // If you don't need the response data, you can omit the next line.
      await response.json();

      navigate(from, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex gap-4 text-3xl mx-auto">
        <FaGoogle onClick={handleGoogle} className="text-blue-600"></FaGoogle>
        <FaGithub onClick={handleGithub}></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
