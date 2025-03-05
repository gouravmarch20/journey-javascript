function processEmployees(employees) {
  return employees.map((emp) => ({
    ...emp,
    annualSalary: emp.salary * 12,
    isEligibleForBonus: emp.salary >= 5000,
  }));
}

// Test Data
const employees = [
  { name: "Alice", salary: 6000, department: "Engineering" },
  { name: "Bob", salary: 4500, department: "Marketing" },
  { name: "Charlie", salary: 5500, department: "Sales" },
];

const result = processEmployees(employees);
console.log(result);
