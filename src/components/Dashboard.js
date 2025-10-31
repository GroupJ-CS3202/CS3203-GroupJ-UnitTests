// this show shart & summary 
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard({ data }) {
  const chartData = {
    labels: [' (Expenses)', '(Remaining)'],
    datasets: [
      {
        data: [data.totalSpent, data.remainingBudget > 0 ? data.remainingBudget : 0],
        backgroundColor: ['#4f9ded', '#ffc107'],
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2>2025/10</h2>
      <div className="summary">
        <div>TotalExpense: ${data.totalSpent.toFixed(2)}</div>
        <div>totalIncome: ${data.totalIncome.toFixed(2)}</div>
        <div>totalLeft: ${data.remainingBudget.toFixed(2)}</div>
      </div>
      <Doughnut data={chartData} />
    </div>
  );
}

export default Dashboard;
