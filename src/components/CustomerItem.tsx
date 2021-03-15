import { useState, useEffect } from "react";

interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export function CustomerItem(props: Customer) {
  return (
    <div class="table-content">
    <div class="table-row">
      <div class="table-data">props.id</div>
      <div class="table-data">pros.firstName</div>
      <div class="table-data"></div>
      <div class="table-data">1</div>
      <div class="table-data">5</div>
    </div>
  );
}
