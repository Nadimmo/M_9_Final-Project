import { useEffect, useState } from "react";
import ItemPage from "../ItemPage/ItemPage";
import Title from "../Title/Title";

const PopularItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menuitem = data.filter((item) => item.category === "popular");
        setItems(menuitem);
      });
  }, []);
//   console.log(items);
  return (
    <div className="mt-0">
      <Title title={"Check it our"} short={"from our menu"}></Title>
      <div className="grid lg:grid-cols-2 gap-8 my-8">
        {
            items.map(item => <ItemPage key={item._id} item={item}></ItemPage>)
        }
      </div>
    </div>
  );
};

export default PopularItem;
