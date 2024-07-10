import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Title from "../Title/Title";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  console.log(payments);

  return (
    <div>
      <Title title={"At a Glance"} short={"payment history"}></Title>
      <div className="my-5">
        <h3 className="text-4xl">Total Payment : {payments.length}</h3>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                    <th></th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    payments.map((item , index) =>  <tr key={item._id} className="hover">
                        <th>{index + 1}</th>
                        <td>{item.email}</td>
                        <td> ${item.price}</td>
                        <td>{item.transactionId}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                      </tr>)
                }
               
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
