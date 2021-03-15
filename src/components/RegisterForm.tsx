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
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />

        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <a href="/" className="button btn-red">
        Cancel
      </a>
    </section>
  );
}
