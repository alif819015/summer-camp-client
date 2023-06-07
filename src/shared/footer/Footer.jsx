import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          {/* TODO:  */}
          <img className="w-20" src={logo} alt="" />
          <p>
            <span className="text-2xl font-semibold">PlayInspire</span>
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="grid grid-flow-col gap-4 text-3xl">
              <a className="text-blue-600">
                <FaFacebook></FaFacebook>
              </a>
              <a className="text-red-600">
                <FaYoutube></FaYoutube>
              </a>
              <a className="text-blue-600">
                <FaTwitter></FaTwitter>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2023 - All right reserved by PlayInspire Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;