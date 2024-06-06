/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ItemPage from "../ItemPage/ItemPage";

const MenuCategory = ({ items }) => {
  return (
    <div className="my-16">
      <div className="grid lg:grid-cols-2 gap-8 mx-12">
        {items.map((item) => (
          <ItemPage key={item._id} item={item}></ItemPage>
        ))}
      <Link>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
