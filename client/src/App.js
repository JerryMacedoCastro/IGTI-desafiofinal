import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import * as api from "./api/apiService";
import Transactions from "./components/transactions/Transactions.js";
//import Transaction from "./components/transactions/Transaction.js";

export default function App() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [filter, setFilter] = useState("2020-01");

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
    console.log(currentTransactions);
    // setCountryCount(currentCountries.length);
    // setTotalPopulation(getTotalPopulation(currentCountries));
  }, [allTransactions, filter]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
    console.log(filter);
  };

  return (
    <div>
      <Header />
      <input
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleFilter}
      />

      <Transactions transactions={currentTransactions} />
    </div>
  );
}
