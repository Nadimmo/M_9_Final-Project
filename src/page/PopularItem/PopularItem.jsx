import { useEffect, useState } from "react";
import ItemPage from "../ItemPage/ItemPage";

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
      <div className="mx-auto text-center">
        <p className="xl italic text-orange-400">- - -Check it out- - -</p>
        <hr className="w-[320px] text-center mx-auto my-2" />
        <h3 className="text-4xl uppercase mt-2">from our menu</h3>
        <hr className="w-[320px] text-center mx-auto my-2 border-5" />
      </div>
      <div className="grid lg:grid-cols-2 gap-8 my-8">
        {
            items.map(item => <ItemPage key={item._id} item={item}></ItemPage>)
        }
      </div>
    </div>
  );
};

export default PopularItem;
