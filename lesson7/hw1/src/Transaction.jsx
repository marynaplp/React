//describes component which accepts data about the transaction in properties from, to, amount, rate, time. Show data about transaction in coicidence wiht example layout. Dates formatted wiht help of library  moment.js. Numbers create with help of new Inti.NumberFormat, local - en-GB
   import React from "react";
import moment from "moment";

const getDate = moment().format("DD MMM");

const Transaction = ({ from, to, amount, rate, time }) => {
    const times = new Date(time);

    const options = {
        hour: "numeric",
        minute: "numeric",
    };

    const getTime = new Intl.DateTimeFormat("en-GB", options).format(times);
    const getAmount = new Intl.NumberFormat("en-GB", options).format(amount);

    return (
        <li className="transaction">
            <span className="transaction__date">{getDate}</span>
            <span className="transaction__time">{getTime}</span>
            <span className="transaction__assets">{`${from} → ${to}`}</span>
            <span className="transaction__rate">{rate}</span>
            <span className="transaction__amount">{getAmount}</span>
        </li>
    );
};

export default Transaction;