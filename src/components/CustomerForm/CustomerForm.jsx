import { useState } from "react";
import "./CustomerForm.css";

const CustomerForm = (addNewCustomer) => {
  const [customerName, setCustomerName] = useState();
  return (
    <form className="customer-form">
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
        onChange={(e) => setCustomerName(e.target.value)}
      />
      {customerName}
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
