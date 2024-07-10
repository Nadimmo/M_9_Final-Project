import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Title from "../Title/Title";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {
    const axiosPublic = useAxiosPublic()
    const {user} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = async(data) => {
    // console.log({ ...data, rating });
    const review = {
        name: user?.displayName,
        details: data.message,
        rating: rating,
        recipe: data.recipe,
        suggestion: data.suggestion
    }
    // console.log(review)
    const res = await axiosPublic.post('/review', review)
        console.log(res)
        if(res.data.insertedId){
            Swal.fire({
                title: "Success!",
                text: "Review submitted successfully.",
                icon: "success",
              });
        
        }
  };

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <div className="mb-5">
        <Title title={"Sharing is Caring"} short={"give a review"}></Title>
      </div>
      {/* react hook form */}
      <div className="flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full p-8 bg-white shadow-md rounded"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Rate Us!</h2>
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-8 h-8 cursor-pointer ${
                  index < rating ? "text-yellow-500" : "text-gray-400"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => handleRating(index + 1)}
              >
                <polygon points="12 2 15 8.5 22 9.5 17 14 18.5 21 12 17.5 5.5 21 7 14 2 9.5 9 8.5 12 2"></polygon>
              </svg>
            ))}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="recipe"
            >
              Which recipe you liked most?
            </label>
            <input
              type="text"
              id="recipe"
              {...register("recipe", { required: "Please enter a recipe" })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Recipe you liked most"
            />
            {errors.recipe && (
              <p className="text-red-500 text-xs italic">
                {errors.recipe.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="suggestion"
            >
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              id="suggestion"
              {...register("suggestion", {
                required: "Please enter a suggestion",
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Suggestion"
            />
            {errors.suggestion && (
              <p className="text-red-500 text-xs italic">
                {errors.suggestion.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Kindly express your care in a short way.
            </label>
            <textarea
              id="message"
              {...register("message", {
                required: "Please enter your message",
              })}
              className="shadow appearance-none border rounded h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Review in detail"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-left">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Review{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
