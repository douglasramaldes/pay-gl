import { Transaction } from "../../models/Transaction";
import React, { useState, useEffect } from "react";
import { fetchPaymentTransactions } from "../Transaction/Transaction.service";
import { List, Input, Button } from "antd";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    fetchPaymentTransactions()
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (!startDate && !endDate) {
      return true;
    }

    if (startDate && endDate) {
      return transaction.date >= startDate && transaction.date <= endDate;
    }

    if (startDate) {
      return transaction.date >= startDate;
    }

    if (endDate) {
      return transaction.date <= endDate;
    }

    return true;
  });

  return (
    <div className="transaction-list">
      {error && <div className="error">Error: {error}</div>}

      <div className="date-filter">
        <label htmlFor="startDate">Start Date:</label>
        <Input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <Input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <Button type="primary">Filter</Button>
      </div>

      <List
        dataSource={filteredTransactions}
        renderItem={(transaction: Transaction) => (
          <List.Item>
            <strong>Transaction ID:</strong> {transaction.id}
            <br />
            <strong>Date:</strong> {transaction.date}
            <br />
            <strong>Description:</strong> {transaction.description}
            <br />
            <strong>Amount:</strong> ${transaction.amount.toFixed(2)}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TransactionList;
