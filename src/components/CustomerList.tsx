import { useEffect, useState } from "react";
import { CustomerItem } from "./CustomerItem";
import api  from "../services/api"

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
   fetch("http://localhost:8080/javabank4/api/customer").then(response => response.json()).then(data => setCustomers(data))
  }, [])

  return (
    <section className="task-list container">
      <header>
        <h2>Customer List</h2>
      </header>

      <div className="table">
        <div class="table-header">
          <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Name
            </a>
          </div>
          <div class="header__item">
            <a id="wins" class="filter__link filter__link--number" href="#">
              Wins
            </a>
          </div>
          <div class="header__item">
            <a id="draws" class="filter__link filter__link--number" href="#">
              Draws
            </a>
          </div>
          <div class="header__item">
            <a id="losses" class="filter__link filter__link--number" href="#">
              Losses
            </a>
          </div>
          <div class="header__item">
            <a id="total" class="filter__link filter__link--number" href="#">
              Total
            </a>
          </div>
        </div>
        {customers.map(customer => return())}
        })
      </div>
    </section>
  );
}
