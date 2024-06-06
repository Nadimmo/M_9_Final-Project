/* eslint-disable react/prop-types */

const ItemPage = ({item}) => {
    console.log(item)
    const {recipe, name, image,price} = item
    return (
        <div>
            <div className="flex">
                <img style={{borderRadius: '0px 200px 200px 200px'}} src={image} alt="" className="w-[100px] h-[100px] " />
                <div className="ml-10">
                    <h3 className="text-xl">{name} ---------------------- <span className="text-orange-400">${price}</span></h3>
                    <p className="lg mt-2">{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default ItemPage;