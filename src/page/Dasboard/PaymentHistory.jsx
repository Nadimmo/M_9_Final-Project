
import usePayments from "../Hooks/usePayments";
import Title from "../Title/Title";

const PaymentHistory = () => {
  const {payments} = usePayments()
//   console.log(payments);

  return (
    <div>
      <Title title={"At a Glance"} short={"payment history"}></Title>
      <div className="my-5">
        <h3 className="text-2xl font-bold font-mono">Total Payment : {payments.length}</h3>
        <div className=" mt-5 bg-white rounded-2xl rounded-b-none">
          <div className="overflow-x-auto rounded-2xl rounded-b-none">
            <table className="table">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
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
