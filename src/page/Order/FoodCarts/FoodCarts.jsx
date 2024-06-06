const FoodCarts = ({item}) => {
    const {recipe, name, image,price} = item

  return (
    <div>
      <div className="card w-[340px] h-[500px]  bg-base-100 shadow-xl">
        <figure>
          <img
          className="relative"
            src={image}
            alt="loading"
          />
          <p className="absolute ml-[260px] text-xl mb-[160px] font-bold bg-black text-white w-fit">${price}</p>
        </figure>
        <div className="card-body text-left">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-sm">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-ghost btn-outline border-0 border-b-2">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCarts;
