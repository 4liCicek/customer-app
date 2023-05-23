import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

function CustomerList({ customers, setCustomers }) {
  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem customer={customer} key={customer.id} />
      ))}
    </ul>
  );
}

export default CustomerList;
