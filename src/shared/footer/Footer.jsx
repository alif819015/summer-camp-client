import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      <footer className="footer p-6 md:p-10 lg:p-10">
        <div className="mb-6 md:mb-0">
          <img className="w-16 mb-4" src={logo} alt="" />
          <p>
            <span className="text-2xl font-semibold">PlayInspire</span>
            <br />
          </p>
        </div>

        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-50">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-[168px] rounded-l-lg rounded-r-none"
              />
              <button className="btn btn-primary rounded-r-lg rounded-l-none">Subscribe</button>
            </div>
          </fieldset>
          <div className="mt-1">
            <div className="grid grid-flow-col gap-4 text-3xl">
              <a
                href="https://www.facebook.com/mahmud.hassan.140193"
                className="text-blue-700 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/alif819015"
                className="text-black text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mahmudhasan819015"
                className="text-blue-700 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </form>
      </footer>

      <footer className="footer footer-center p-4">
        <div>
          <p className="text-center">
            Copyright © 2024 - All rights reserved by PlayInspire Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
