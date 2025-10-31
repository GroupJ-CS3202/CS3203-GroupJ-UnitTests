import React, { useState } from 'react';
import './App.css';
import FinancialTracker from './financial';
import Dashboard from './components/Dashboard';
import AddTransactionModal from './components/AddTransactionModal';
import TransactionList from './components/TransactionList';

const tracker = new FinancialTracker(0); // budget handled by income

function App() {
  const [data, setData] = useState(tracker.report());
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddTransaction = (type, amount, desc) => {
    if (type === 'expense') tracker.addExpense(amount, desc);
    else tracker.addIncome(amount, desc);
    setData(tracker.report());
    setModalOpen(false);
  };

  return (
    <div className="app">
      <Dashboard data={data} />
      <TransactionList data={data} />
      <button className="add-btn" onClick={() => setModalOpen(true)}>+</button>
      {modalOpen && (
        <AddTransactionModal
          onSave={handleAddTransaction}
          onCancel={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
