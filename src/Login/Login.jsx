/* eslint-disable react/no-unescaped-entities */
import "./style.css";
import logo from "../assets/others/authentication2.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";

const Login = () => {
  const [disable, setDisable] = useState(true)
  const { login, loginWithGoogle } = useContext(AuthContext);
  const captchaRef = useRef(null)

  const location = useLocation();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name,email,password)
    login(email, password)
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Log in successfully"
        });
        navigate(location?.state || "/");
        console.log(res.user);
        form.reset()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handlerGoogle = (e) => {
    loginWithGoogle()
      .then((res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Log in successfully"
        });
        console.log(res.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

  const handlerCaptcha =e=>{
    e.preventDefault()
    const user_captcha_value = captchaRef.current.value;
    // console.log(user_captcha_value) 
    if (validateCaptcha(user_captcha_value)==true) {
      setDisable(false)
  }

  else {
      setDisable(true)
  }


  }


  return (
    <div className="back pt-[100px]">
      <div className="hero min-h-screen back shadow-2xl border-0 border-b-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <img src={logo} alt="" />
          </div>
          <div className="card shrink-0 w-[400px]  shadow-2xl ">
            <form onSubmit={handlerSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
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
                  required
                  name="password"
                />
              </div>
              <div >
                <LoadCanvasTemplate  />
              </div>
              <input
                  type="text"
                  placeholder="text"
                  className="input input-bordered"
                  required
                  
                  ref={captchaRef}
                />
              <button onClick={handlerCaptcha} className="btn text-sm bg-yellow-600 text-white">
                  Validate
                </button>
              <div className="form-control mt-6">
                <button disabled={disable} className="btn bg-yellow-600 text-white">
                  Login
                </button>
              </div>
              <div>
                <p className="text-sm text-center my-4 text-yellow-600">
                  Don't have any account?{" "}
                  <Link to="/register" className="hover:text-black">
                    Register
                  </Link>
                </p>
              </div>
              <p className="text-center text-lg">- -Or sign up with- -</p>
              <div className="grid grid-cols-3 gap-5 text-4xl ml-6 mt-4">
                <FaFacebook className="hover:cursor-pointer" />
                <FcGoogle
                  onClick={handlerGoogle}
                  className="hover:cursor-pointer"
                />
                <FaGithub className="hover:cursor-pointer" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
