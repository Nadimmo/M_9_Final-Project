import Cover from "../Cover/Cover";
import logo from "../../assets/menu/banner3.jpg";
import Title from "../Title/Title";
import useMenu from "../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
// image 
import img1 from '../../assets/menu/dessert-bg.jpeg'
import img2 from '../../assets/menu/pizza-bg.jpg'
import img3 from '../../assets/menu/salad-bg.jpg'
import img4 from '../../assets/menu/soup-bg.jpg'
import { Helmet } from "react-helmet";





const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  // console.log(offered)

  return (
    <div>
       <Helmet>
        <title>Our Menu Page</title>
      </Helmet>
      <Cover
        img={logo}
        title="our menu"
        description={"Would you like to try a dish?"}
      ></Cover>
      <br />
      <br />
      <Title title={"Don't miss "} short={"today's offer"}></Title>
      <div className="mt-10 ">
        <MenuCategory title={"offered"} items={offered}></MenuCategory>
        <Cover
        img={img2}
        title="pizza"
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
        <MenuCategory title={"pizza"}  items={pizza}></MenuCategory>
        <Cover
        img={img1}
        title="dessert"
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
        <MenuCategory title={"dessert"} items={dessert}></MenuCategory>
        <Cover
        img={img3}
        title="salad"
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
        <MenuCategory title={"salad"} items={salad}></MenuCategory>
        <Cover
        img={img4}
        title="soup"
        description={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
      ></Cover>
        <MenuCategory title={"soup"} items={soup}></MenuCategory>
      </div>
    </div>
  );
};

export default OurMenu;
