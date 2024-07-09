import Title from "../Title/Title";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckoutForm/CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51PZmx2Ro2enkpQYdZ3ZdtlrvB8ixKb9oW0nuhncTegOGpo2M4gnGqE1sgo9pppKCFZ9P8nDZHJgBdRjVat4qUnhm00jbkvAaV0')


    return (
        <div>
            <Title title={"Please eat on payment"} short={"Payment"}></Title>
            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;
