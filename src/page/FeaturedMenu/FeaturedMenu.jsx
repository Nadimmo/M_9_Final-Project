import { Link } from "react-router-dom";
import logo from "../../assets/home/featured.jpg";
import Title from "../Title/Title";
import "./style.css";
const FeaturedMenu = () => {
  return (
    <div className="back mt-24 py-10 lg:px-10">
      <div className="mx-12 text-black">
        <Title title={"Check it our"} short={"from our menu"}></Title>
        <div className="lg:flex mt-5">
          <img src={logo} alt="" className=" lg:w-[460px] lg:h-[280px]" />
          <div className="lg:ml-10 mt-16 lg:w-[500px] ">
            <h4 className="text-lg">
              March 20, 2023 <br /> WHERE CAN I GET SOME?
            </h4>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-2"><Link to={'/menu'}>Order Now</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMenu;
