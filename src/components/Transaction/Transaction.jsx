import React from 'react';
import css from '../Transaction/Transaction.module.css';

export default function Transaction({ transactions }) {
  const { type, amount, currency } = transactions;

  return (
    <tr className={css.tr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  );
}
