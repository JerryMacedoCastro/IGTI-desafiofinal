import React from "react";
import css from "./informations.module.css";

export default function Informations({ count, totalIncomes, totalExpenses }) {
  const balance = totalIncomes - totalExpenses;

  return (
    <div className={css.main}>
      <ul className={css.list}>
        <li className={css.info}> Lançamentos: {count}</li>
        <li className={css.info}> Receita: {totalIncomes}</li>
        <li className={css.info}> Despesas: {totalExpenses} </li>
        <li className={css.info}> Saldo: {balance}</li>
      </ul>
    </div>
  );
}
