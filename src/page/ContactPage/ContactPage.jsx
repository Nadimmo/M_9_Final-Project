import Cover from "../Cover/Cover";
import logo from "../../assets/contact/banner.jpg";
import Title from "../Title/Title";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { PiTimerFill } from "react-icons/pi";
import useAxiosPublic from './../Hooks/useAxiosPublic';
import Swal from "sweetalert2";

const ContactPage = () => {
  const axiosPublic =useAxiosPublic()


  const handlerSubmit =(e)=>{
    e.preventDefault()
    const from = e.target 
    const name = from.name.value 
    const email = from.email.value;
    const phone = from.phone.value;
    const message = from.message.value;
    const userInfo = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
    // console.log(userInfo)
    axiosPublic.post('/contact', userInfo)
    .then(res =>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        from.reset()
      }
    })
    .catch(err =>{
      alert(err.message)
    })


  }


  return (
    <div>
      <Cover
        img={logo}
        title={"contact us"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <br />
      <br />
      <br />
      <Title title={"Visit Us "} short={"our location"}></Title>
      <div className="ml-16 mt-5 lg:mx-12 grid lg:grid-cols-3 gap-10">
        <div className="w-[300px] h-[180px]  border-2 bg-white text-black">
          <p className="bg-[#D1A054] h-10 w-full">
            <BiSolidPhoneCall className="ml-[120px] text-4xl" />
          </p>
          <div className="mt-5 text-center">
            <p className="text-lg font-bold">Phone</p>
            <p className="text-sm">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-[300px] lg:ml-5 h-[180px]  border-2 bg-white text-black">
          <p className="bg-[#D1A054] h-10 w-full">
            <FaLocationDot className="ml-[120px] text-4xl" />
          </p>
          <div className="mt-5 text-center">
            <p className="text-lg font-bold">Address</p>
            <p className="text-sm">+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="w-[300px] h-[180px]  border-2 bg-white text-black">
          <p className="bg-[#D1A054] h-10 w-full">
            <PiTimerFill className="ml-[120px] text-4xl" />
          </p>
          <div className="mt-5 text-center">
            <p className="text-lg font-bold">Working Houser</p>
            <p className="text-sm">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      <div className="mx-12 my-10">
        <Title title={"Send Us a Message"} short={"contact from"}></Title>
        <form onSubmit={handlerSubmit} action="" className="bg-base-200 text-black p-10">
          <div className="lg:flex justify-between">
            <div className="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered lg:w-[500px]"
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered lg:w-[500px]"
                required
              />
            </div>
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              name="phone"
              type="number"
              placeholder="phone"
              className="input input-bordered lg:w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              name="message"
              type="text"
              placeholder="message"
              className="input input-bordered lg:w-full h-[200px]"
              required
            />
          </div>

          <button className="btn bg-[#D1A054] text-black mt-10 justify-center">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
