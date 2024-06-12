import './style.css'
import logo from '../../assets/others/authentication2.png'
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Register = () => {

    const handlerSubmit = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,email,password)

        

    }







  return (
    <div  className='back'>
      <div className="hero min-h-screen back shadow-2xl border-0 border-b-2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Register now!</h1>
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
                  name='email'
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
                  name='name'
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
                  name='password'
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-yellow-600 text-white">Register</button>
              </div>
              <div>
                <p className='text-sm text-center my-4 text-yellow-600'>Already have any account? <Link className='hover:text-black'>Login</Link></p>
              </div>
              <p className="text-center text-lg">- -Or sign up with- -</p>
              <div className='grid grid-cols-3 gap-5 text-4xl ml-6 mt-4'>
              <FaFacebook className='hover:cursor-pointer' />
              <FcGoogle className='hover:cursor-pointer'/>
              <FaGithub className='hover:cursor-pointer'/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
