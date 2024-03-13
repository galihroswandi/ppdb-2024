import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InputForm from "../components/Elements/Auth/InputForm";
import UserIcon from "../assets/icons/user.svg";
import LockIcon from "../assets/icons/lock.svg";
import LogoAuth from "../assets/img/logoauth.png";
import AmicoLogin from "../assets/img/amicoLogin.png";

export default function Login() {
  return (
    <section className="md:flex items-center">
      <section className="bg-primary-color bg-opacity-40 min-h-[85vh] md:min-h-screen md:w-full">
        <section className="w-[90%] mx-auto pt-3">
          <section className="logo flex items-center gap-2">
            <img src={LogoAuth} alt="Log Image" className="w-28" />
          </section>
          <section className="imageBanner mt-28 min457:max-w-xs sm:max-w-sm xl:max-w-lg min457:mx-auto flex justify-center items-end">
            <img src={AmicoLogin} alt="Image" />
          </section>
        </section>
      </section>
      <section className="flex justify-center items-center w-full min-h-[70vh]">
        <section className="bg-white rounded-md shadow-md py-7 px-8 md:px-8 lg:px-10 w-[90%] sm:w-[80%] mx-auto lg:w-[70%] xl:w-[60%] xl:py-10 lg:mx-5">
          <header className="mb-5">
            <h1 className="font-bold text-slate-600 text-xl xl:text-2xl">
              Log In
            </h1>
          </header>
          <form onSubmit={() => {}}>
            <ToastContainer autoClose={2000} />
            <InputForm
              imgUrl={UserIcon}
              placeholder="Username"
              type="text"
              classWrapper="mb-4"
              autoFocus={true}
            />
            <InputForm
              imgUrl={LockIcon}
              placeholder="Password"
              type="password"
              classWrapper="mb-2"
              autoFocus={false}
            />
            <section className="forgot-password mb-4 w-full text-end lg:my-2">
              <Link to={"/forgot-password"} className="text-slate-800 text-sm">
                Lupa Password ?
              </Link>
            </section>
            <button
              className="flex items-center gap-x-1 justify-center w-full bg-primary-color rounded-md p-2.5 lg:py-3 font-semibold hover:bg-blue-600 mb-8 text-white"
              type="submit"
            >
              Log In
            </button>
            <section className="dont-have-account text-center text-slate-800 text-base">
              <span>Belum punya akun? </span>
              <Link to="/signup" className="text-primary-color font-semibold">
                Register
              </Link>
            </section>
          </form>
        </section>
      </section>
    </section>
  );
}
