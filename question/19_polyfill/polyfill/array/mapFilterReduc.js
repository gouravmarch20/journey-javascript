function calculateTotalBonuses(employees, minRating, bonusPercentage) {
  return employees
    .filter((employee) => employee.performance >= minRating)
    .map((employee) => employee.salary * 12 * (bonusPercentage / 100))
    .reduce((total, bonus) => total + bonus, 0);
}
// Test Case
const employees = [
  { name: "Alice", salary: 5000, department: "Engineering", performance: 4 },
  { name: "Bob", salary: 4500, department: "Marketing", performance: 3 },
  { name: "Charlie", salary: 6000, department: "Sales", performance: 5 },
];
console.log(calculateTotalBonuses(employees, 4, 10));
