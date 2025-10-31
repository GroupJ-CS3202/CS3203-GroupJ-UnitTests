class FinancialTracker {
  constructor(monthlyBudget) {
    this.monthlyBudget = monthlyBudget;
    this.spending = [];
    this.income = [];
  }

  addExpense(amount, description = '') {
    if (amount <= 0) throw new Error('Expense must be positive');
    this.spending.push({ amount, description, date: new Date().toISOString() });
  }

  addIncome(amount, description = '') {
    if (amount <= 0) throw new Error('Income must be positive');
    this.income.push({ amount, description, date: new Date().toISOString() });
  }

  totalSpent() {
    return this.spending.reduce((sum, e) => sum + e.amount, 0);
  }

  totalIncome() {
    return this.income.reduce((sum, i) => sum + i.amount, 0);
  }

  // ✅ 改成收入 - 支出
  remainingBudget() {
    return this.totalIncome() - this.totalSpent();
  }

  report() {
    return {
      totalSpent: this.totalSpent(),
      totalIncome: this.totalIncome(),
      remainingBudget: this.remainingBudget(),
      spending: this.spending,
      income: this.income,
    };
  }
}

export default FinancialTracker;
