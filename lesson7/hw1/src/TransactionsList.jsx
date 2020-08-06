// describes the Component which accepts a list of transactions in props transactions and shows these transactions with  help  of component Transaction  
import React, { Component } from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map((elem) => (
        <Transaction key={elem.id} {...elem} />
      ))}
    </ul>
  );
};

export default TransactionsList;
