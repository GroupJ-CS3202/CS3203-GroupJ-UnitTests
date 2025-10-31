import FinancialTracker from '../financial';

describe('FinancialTracker', () => {
  let tracker;

  beforeEach(() => {
    tracker = new FinancialTracker(500);
  });

  // Test initial state
  test('initializes with correct values', () => {
    expect(tracker.monthlyBudget).toBe(500);
    expect(tracker.spending).toEqual([]);
    expect(tracker.income).toEqual([]);
  });

  // Test addExpense and totalSpent
  test('adds expenses and calculates totals correctly', () => {
    tracker.addExpense(100, 'Groceries');
    tracker.addExpense(50, 'Transport');

    expect(tracker.spending.length).toBe(2);
    expect(tracker.totalSpent()).toBe(150);
    expect(tracker.remainingBudget()).toBe(-150); // since no income yet
  });

  // Test addIncome and totalIncome
  test('adds income and calculates totals correctly', () => {
    tracker.addIncome(1000, 'Salary');
    tracker.addIncome(200, 'Freelance');

    expect(tracker.income.length).toBe(2);
    expect(tracker.totalIncome()).toBe(1200);
  });

  // Test combined income and expenses
  test('calculates remaining budget correctly after income and expenses', () => {
    tracker.addIncome(1000, 'Salary');
    tracker.addExpense(300, 'Rent');
    tracker.addExpense(100, 'Groceries');

    expect(tracker.remainingBudget()).toBe(600); // 1000 - 400
  });

  // Test invalid (negative or zero) amounts
  test('throws error when adding invalid expense or income', () => {
    expect(() => tracker.addExpense(0, 'Invalid')).toThrow('Expense must be positive');
    expect(() => tracker.addExpense(-50, 'Invalid')).toThrow('Expense must be positive');
    expect(() => tracker.addIncome(0, 'Invalid')).toThrow('Income must be positive');
    expect(() => tracker.addIncome(-100, 'Invalid')).toThrow('Income must be positive');
  });

  // Test report() returns correct structure
  test('report returns a correct summary object', () => {
    tracker.addIncome(1000, 'Salary');
    tracker.addExpense(200, 'Food');
    tracker.addExpense(100, 'Transport');

    const report = tracker.report();

    expect(report).toHaveProperty('totalSpent', 300);
    expect(report).toHaveProperty('totalIncome', 1000);
    expect(report).toHaveProperty('remainingBudget', 700);
    expect(Array.isArray(report.spending)).toBe(true);
    expect(Array.isArray(report.income)).toBe(true);
  });

  // Test that each transaction stores a timestamp and description
  test('stores timestamps and descriptions correctly', () => {
    tracker.addExpense(50, 'Coffee');
    tracker.addIncome(200, 'Gift');

    expect(tracker.spending[0]).toMatchObject({
      amount: 50,
      description: 'Coffee',
    });
    expect(tracker.spending[0].date).toBeTruthy();

    expect(tracker.income[0]).toMatchObject({
      amount: 200,
      description: 'Gift',
    });
    expect(tracker.income[0].date).toBeTruthy();
  });
});
