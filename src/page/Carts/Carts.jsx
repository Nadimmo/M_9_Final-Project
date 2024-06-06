import logo from "../../assets/home/slide1.jpg";
const Carts = () => {
  return (
    <div className="mt-24">
      <div className="mx-auto text-center">
        <p className="xl italic text-orange-400">- - -Should Try- - -</p>
        <hr className="w-[400px] text-center mx-auto my-2" />
        <h3 className="text-4xl uppercase mt-2">CHEF RECOMMENDS</h3>
        <hr className="w-[400px] text-center mx-auto my-2 border-5" />
      </div>
      <div className="grid  lg:grid-cols-3 gap-5">
        <div className="card text-center card-compact w-[340px] bg-gray-200 shadow-xl mt-10">
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
        <div className="card text-center card-compact w-[340px] bg-gray-200 shadow-xl mt-10">
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
        <div className="card text-center card-compact w-[340px] bg-gray-200 shadow-xl mt-10">
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
