import { useState, useEffect } from "react";

interface CustomerItemProps {
  customer: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}
export function CustomerItem(props: CustomerItemProps) {
  return (
    <div className="table-content">
      <div className="table-row">
        <div className="table-data">{props.customer.id}</div>
        <div className="table-data">{props.customer.firstName}</div>
        <div className="table-data">{props.customer.lastName}</div>
        <div className="table-data">{props.customer.email}</div>
        <div className="table-data">{props.customer.phone}</div>
      </div>
    </div>
  );
}
