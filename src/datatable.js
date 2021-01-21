import React from "react";

export default function Datatable({ data }) {
  return (
    <div>
      <h1>hello from datatable</h1>

      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.first_name}</li>

          <li>{item.last_name}</li>
          <li>{item.email}</li>
          <li>{item.gender}</li>
        </ul>
      ))}
    </div>
  );
}
