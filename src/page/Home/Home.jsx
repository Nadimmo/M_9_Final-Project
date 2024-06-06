import { Helmet } from "react-helmet";
import Carts from "../Carts/Carts";
import Category from "../Category/Category";
import FeaturedMenu from "../FeaturedMenu/FeaturedMenu";
import PopularItem from "../PopularItem/PopularItem";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner/Banner";
import Boss from "./Boss/Boss";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Banner></Banner>
       <div className="mx-16">
        <Category></Category>
        <Boss></Boss>
        <PopularItem></PopularItem>
      </div>
      <div className="mx-16">
        <Carts></Carts>
      </div>
      <FeaturedMenu></FeaturedMenu>
      <div className="mx-16">
        <Testimonials></Testimonials>
      </div> 
      <br />
      <br />
    </div>
  );
};

export default Home;
