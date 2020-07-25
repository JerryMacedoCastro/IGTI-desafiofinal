import React from "react";

import css from "./transactions.module.css";

export default function Transactions({ transactions }) {
  let allDays = new Set();
  transactions.forEach((transaction) => allDays.add(transaction.yearMonthDay));
  allDays = Array.from(allDays);

  return (
    <div>
      <div className={css.grid}>
        <table className="striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Value</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction._id}>
                  <td>{transaction.yearMonthDay}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.value}</td>
                  <td>{transaction.type}</td>
                  <td>+ / -</td>
                </tr>
              );
            })}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
