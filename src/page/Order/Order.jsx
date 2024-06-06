import Cover from "../Cover/Cover";
import logo from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import FoodCarts from "./FoodCarts/FoodCarts";
import { Helmet } from "react-helmet";
const Order = () => {

    const [menu] = useMenu();
    const drinks = menu.filter((item) => item.category === "drinks");
    const pizza = menu.filter((item) => item.category === "pizza");
    const dessert = menu.filter((item) => item.category === "dessert");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");



  return (
    <div>
      <Helmet>
        <title>Order Page</title>
      </Helmet>
      <Cover
        img={logo}
        title={"our order"}
        description={"Would you like to try a dish?"}
      ></Cover>
      <div className="mx-5 lg:mx-16 mt-20">
        <Tabs>
          <TabList>
            <Tab> <span className="uppercase">Salad</span></Tab>
            <Tab><span className="uppercase">Pizza</span></Tab>
            <Tab><span className="uppercase">Desserts</span></Tab>
            <Tab><span className="uppercase">Soup</span></Tab>
            <Tab><span className="uppercase">Drinks</span></Tab>
          </TabList>

          <TabPanel>
            <div className="grid lg:grid-cols-3 gap-10">
                {salad.map(item => <FoodCarts key={item._id} item={item}></FoodCarts>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10">
                {pizza.map(item => <FoodCarts key={item._id} item={item}></FoodCarts>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10">
                {dessert.map(item => <FoodCarts key={item._id} item={item}></FoodCarts>)}
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid lg:grid-cols-3 gap-10">
                {soup.map(item => <FoodCarts key={item._id} item={item}></FoodCarts>)}
            </div>
          </TabPanel>
          <TabPanel><div className="grid lg:grid-cols-3 gap-10">
                {drinks.map(item => <FoodCarts key={item._id} item={item}></FoodCarts>)}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
