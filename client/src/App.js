import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import Input from "./components/input/Input";
import * as api from "./api/apiService";
import Transactions from "./components/transactions/Transactions.js";
import Informations from "./components/informations/Informations.js";
//import Transaction from "./components/transactions/Transaction.js";

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [filter, setFilter] = useState("2020-01");
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [countTransacations, setCountTransacations] = useState(0);
  //  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await api.getAll();
      setTimeout(() => {
        setAllTransactions(transactions);
        setCurrentTransactions(transactions);
      });
    };

    getTransactions();
  }, []);

  useEffect(() => {
    const currentTransactions = allTransactions.filter((transaction) => {
      return transaction.yearMonth === filter;
    });

    setCurrentTransactions(currentTransactions);
    //console.log(currentTransactions);
    // setCountryCount(currentCountries.length);
    // setTotalPopulation(getTotalPopulation(currentCountries));
  }, [allTransactions, filter]);

  useEffect(() => {
    const totalIncomes = currentTransactions
      .filter((transaction) => {
        return transaction.type === "+";
      })
      .reduce((prevVal, transaction) => prevVal + transaction.value, 0);

    const totalExpenses = currentTransactions
      .filter((transaction) => {
        return transaction.type === "-";
      })
      .reduce((prevVal, transaction) => prevVal + transaction.value, 0);

    setExpenses(totalExpenses);
    setIncomes(totalIncomes);
    setCountTransacations(currentTransactions.length);
  }, [currentTransactions, filter]);

  const handleFilter = (newtext) => {
    setFilter(newtext);
    console.log(filter);
  };

  return (
    <div>
      <Header />

      <Input filter={filter} onChangeFilter={handleFilter} />
      <Informations
        count={countTransacations}
        totalIncomes={incomes}
        totalExpenses={expenses}
      />
      {/* <input
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleFilter}
      /> */}
      <Transactions transactions={currentTransactions} />
    </div>
  );
}
