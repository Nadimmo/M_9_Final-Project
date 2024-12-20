import "./style.css";
import logo from "../../assets/others/authentication2.png";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const Register = () => {
  const { register, updateUserProfile, loginWithGoogle, loginWithGithub,user } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    // console.log(name,email,password)

    register(email, password)
      .then((res) => {
        updateUserProfile(name, photo);
        const userInfo = {
          name: name,
          email: email,
        };
        // console.log(userInfo);

        // send to data in database a user
        axiosPublic.post("/user", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("send data to database a user");
            // console.log(res.data)
            form.reset();
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "User Create successfully",
            });
            navigate(location?.state || "/");
          }
          form.reset();
        });
      })

      .catch((error) => {
        console.error(error);
      });
  };

  const handlerGoogle = (e) => {
    loginWithGoogle()
      .then((res) => {
        if (res.user) {
          const userInfo = {
            name: user?.displayName,
            email: user?.email
          }
          axiosPublic.post("/user", userInfo).then((res) => {
            if (res.data) {
              const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                },
              });
              Toast.fire({
                icon: "success",
                title: "User Create successfully",
              });
              // console.log(res.user);
              navigate(location?.state || "/");
            }
          });
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handlerGithub = (e) => {
    loginWithGithub()
    .then((res) => {
      if (res.user) {
        const userInfo = {
          name: user?.displayName,
          email: user?.email
        }
        axiosPublic.post("/user", userInfo).then((res) => {
          if (res.data) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "success",
              title: "User Create successfully",
            });
            // console.log(res.user);
            navigate(location?.state || "/");
          }
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="back pt-[100px]">
      <div className="hero min-h-screen back shadow-2xl border-0 border-b-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
            <img src={logo} alt="" />
          </div>
          <div className="card shrink-0  shadow-2xl ">
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo </span>
                </label>
                <input
                  type="url"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                  name="photo"
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
              <div className="form-control mt-6">
                <button className="btn bg-yellow-600 text-white">
                  Register
                </button>
              </div>
              <div>
                <p className="text-sm text-center my-4 text-yellow-600">
                  Already have any account?{" "}
                  <Link className="hover:text-black" to={"/login"}>
                    Login
                  </Link>
                </p>
              </div>
              <div className="text-center text-lg divider">- - Or - -</div>
              <div className=" text-4xl  mt-4">
                <button
                  onClick={handlerGoogle}
                  className="btn w-full hover:bg-yellow-600 hover:text-white"
                >
                  {" "}
                  <FcGoogle className="hover:cursor-pointer  text-2xl ml-20" />{" "}
                  <p> sign in with google</p>
                </button>
                <button
                  onClick={handlerGithub}
                  className="btn w-full mt-2 hover:bg-yellow-600 hover:text-white "
                >
                  {" "}
                  <FaGithub className="hover:cursor-pointer text-2xl ml-20" />
                  <p>sig in with github</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
