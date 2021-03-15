import { FormEvent, useEffect, useState } from "react";
import api from "../services/api";
import "../styles/BaseStyle.scss";
export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleCustomerSubmit() {
    console.log(firstName, lastName, email, phone);
    api.post("customer", {
      firstName,
      lastName,
      email,
      phone,
    });
  }

  return (
    <section className="container box">
      <form onSubmit={handleCustomerSubmit}>
        <label>First Name:</label>
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name:</label>
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>phone:</label>
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
        <button>Cansel</button>
      </form>
      <a href="/" className="button-link">
        Cancel
      </a>
    </section>
  );
}
