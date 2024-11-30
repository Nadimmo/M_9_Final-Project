import logo from "../../assets/home/slide1.jpg";
import Title from "../Title/Title";
const Carts = () => {
  return (
    <div className="mt-24 mx-auto">
      <Title title={"Should Try"} short={"CHEF RECOMMENDS"}></Title>
      <div className="grid  lg:grid-cols-3 gap-5 mx-auto">
        <div className="card text-center card-compact lg:w-[340px] bg-gray-200 shadow-xl mt-10">
          <figure>
            <img src={logo} alt="Shoes" className="h-[280px] w-full " />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-ghost btn-outline border-0 border-b-4 uppercase">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card text-center card-compact lg:w-[340px] bg-gray-200 shadow-xl mt-10">
          <figure>
            <img src={logo} alt="Shoes" className="h-[280px] w-full " />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-ghost btn-outline border-0 border-b-4 uppercase">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card text-center card-compact lg:w-[340px] bg-gray-200 shadow-xl mt-10">
          <figure>
            <img src={logo} alt="Shoes" className="h-[280px] w-full " />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-ghost btn-outline border-0 border-b-4 uppercase">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
