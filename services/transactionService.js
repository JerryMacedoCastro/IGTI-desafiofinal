const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

const getTransactions = async (request, response) => {
  const period = request.query.period;

  try {
    const transactions = await TransactionModel.find(
      !!period ? { yearMonth: period } : {}
    );

    response.status(200).send(transactions);
  } catch (err) {
    response.status(500).send(err);
  }
};

const createTransaction = async (request, response) => {
  try {
    const transaction = new TransactionModel({
      description: request.body.description,
      value: request.body.value,
      category: request.body.category,
      year: request.body.year,
      month: request.body.month,
      day: request.body.day,
      yearMonth: request.body.yearMonth,
      yearMonthDay: request.body.yearMonthDay,
      type: request.body.type,
    });

    await transaction.save();

    response.status(200).send(` Transaction sussesfuly added!`);
  } catch (err) {
    response.status(500).send(err);
  }
};

const updateTransaction = async (request, response) => {
  const id = request.params.id;

  try {
    const transaction = await TransactionModel.findByIdAndUpdate(
      id,
      request.body
    );
    response.status(200).send(transaction);
  } catch (err) {
    response.status(500).send(err);
  }
};

const deleteTransaction = async (request, response) => {
  const id = request.params.id;
  try {
    const data = await TransactionModel.findByIdAndDelete(id);
    response.status(200).send(data);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const transactionService = {
  getTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
};

module.exports = transactionService;
