import axios from "axios";

const API_URL = "http://localhost:3001/api/transaction";

async function getAll(date) {
  const res = await axios.get(API_URL);

  const AllTransactions = res.data.map((transaction) => {
    const {
      category,
      day,
      description,
      month,
      type,
      value,
      year,
      yearMonth,
      yearMonthDay,
      id: _id,
    } = transaction;
    return { ...transaction };
  });

  AllTransactions.sort((a, b) => b.yearMonthDay - a.yearMonthDay);

  return AllTransactions;
}

export { getAll };
