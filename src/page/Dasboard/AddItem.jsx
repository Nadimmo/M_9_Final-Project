import React from "react";
import { useForm } from "react-hook-form";
import { IoAddCircle } from "react-icons/io5";
import Title from "../Title/Title";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddItem = () => {
  const { register, handleSubmit , reset} = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
//   image bb api and key
  const image_hosting_key = "ebced42c75e22d67b350b68860e7277c"
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

  const onSubmit = async (data) =>{
      // get image file in image filed
      const imageFile = {image: data.image[0]}
      // send data in image bb
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: 
          {'content-type': 'multipart/form-data'}
        })
        // console.log(data)
        if(res.data.success){
            const menuItem = {
                name: data.name,
                price: parseFloat(data.price),
                category: data.category,
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const result = await axiosSecure.post('/menu', menuItem)
            if(result.data.insertedId){
                 // show success popup
                 reset();
                 Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: `${data.name} is added to the menu.`,
                     showConfirmButton: false,
                     timer: 1500
                   });
            } 
        }


  } 
    
  return (
    <div>
        <Title title={"What's a new?"} short={"add an item"}></Title>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-10 my-10">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe Name"
            className="input w-full input-bordered"
          />
        </label>
        <div className="lg:flex gap-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
                defaultValue={"default"}
              {...register("category")}
              className="select select-bordered"
            >
              <option disabled value={"default"}>
                {" "}
                Select Your Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Dessert</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price")}
              type="text"
              placeholder="Price"
              className="input w-full input-bordered"
            />
          </label>
        </div>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
         
          </div>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
          
        </label>
        <input  {...register("image")} type="file" className="file-input w-full mt-6" />

        <button className="btn bg-[#D1A054] mt-5">Add Item <IoAddCircle className="ml-2 text-2xl"></IoAddCircle></button>
      </form>
    </div>
  );
};

export default AddItem;
