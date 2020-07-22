const express = require("express");
const transactionRouter = express.Router();
const transactionService = require("../services/transactionService");

transactionRouter.get("/", transactionService.getTransactions);
transactionRouter.post("/", transactionService.createTransaction);
transactionRouter.put("/:id", transactionService.updateTransaction);
transactionRouter.delete("/:id", transactionService.deleteTransaction);

module.exports = transactionRouter;
