import React from "react";
import Transaction from "./Transaction";
import css from "./transactions.module.css";

export default function Transactions({ transactions }) {
  let allDays = new Set();
  transactions.forEach((transaction) => allDays.add(transaction.yearMonthDay));
  allDays = Array.from(allDays);

  return (
    <div>
      {allDays.map((date) => {
        return (
          <div key={date} className={css.box}>
            <Transaction transactions={transactions} date={date} />{" "}
          </div>
        );
      })}
    </div>
  );
}
