import React from 'react';

function TransactionList({ data }) {
  return (
    <div className="transactions">
      {[...data.income, ...data.spending]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, idx) => (
          <div key={idx} className="transaction">
            <span>{new Date(item.date).toLocaleDateString()} - {item.description}</span>
            <span style={{ color: data.spending.includes(item) ? '#ff4d4d' : '#28a745' }}>
              {data.spending.includes(item) ? '-' : '+'}${item.amount.toFixed(2)}
            </span>
          </div>
        ))}
    </div>
  );
}

export default TransactionList;
