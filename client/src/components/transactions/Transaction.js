import React from "react";

export default function Transaction({ transactions, date }) {
  const transactionByDate = transactions.filter((transaction) => {
    console.log(transaction.yearMonthDay);
    return transaction.yearMonthDay === date;
  });

  return (
    <table className="striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>value</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactionByDate.map((transaction) => {
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
      </tbody>
    </table>
  );
}
