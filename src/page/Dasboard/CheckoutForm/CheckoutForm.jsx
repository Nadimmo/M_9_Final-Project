import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useContext(AuthContext)
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const [cartError, setCartError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", {price: totalPrice}).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // create paymentMethod
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error, "error");
      setCartError(error.message);
    } else {
      console.log("paymentMethod", paymentMethod);
      setCartError("");
    }

    // create confirm payment method
   const {paymentIntent, error: cartError} = await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
      card: card,
      billing_details:{
        name: user?.displayName || "anonymous",
        email: user?.name || "anonymous"

      }
    }

   })

   if(cartError){
    console.log('error', cartError)
   }
   else{
    console.log('paymentIntent', paymentIntent)
   }






  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-info my-5" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <p className="text-red-500">{cartError}</p>
    </div>
  );
};

export default CheckOutForm;
