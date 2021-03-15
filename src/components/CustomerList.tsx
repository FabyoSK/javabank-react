import { useEffect, useState } from "react";
import { CustomerItem } from "./CustomerItem";
import api from "../services/api";

import "../styles/CustomerList.scss";
import "../styles/CustomerTable.scss";
import { FiTrash, FiCheckSquare } from "react-icons/fi";
import { transform } from "@babel/core";

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function CustomerList() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/javabank4/api/customer")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <section className="customer-list container">
      <header>
        <h2>Customer List</h2>
      </header>

      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a>Id</a>
          </div>
          <div className="header__item">
            <a>First Name</a>
          </div>
          <div className="header__item">
            <a>Last Name</a>
          </div>
          <div className="header__item">
            <a>Email</a>
          </div>
          <div className="header__item">
            <a>Phone</a>
          </div>
        </div>
        {customers.map((customer) => {
          return <CustomerItem customer={customer} />;
        })}
      </div>
    </section>
  );
}
