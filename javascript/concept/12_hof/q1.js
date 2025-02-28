function findUsersWithoutSkill(users, skill) {
  const usersWithoutSkill = users
    .filter((user) => !user.skills.includes(skill)) // Filter users who do not have the skill
    .map((user) => user.name); // Extract their names

  usersWithoutSkill.forEach((name) => console.log(name)); // Log names of these users
  return usersWithoutSkill; // Return the names
}

// Test cases
const users = [
  { name: "Alice", skills: ["JavaScript", "React"] },
  { name: "Bob", skills: ["Python", "Django"] },
  { name: "Charlie", skills: ["JavaScript", "Node.js"] },
  { name: "Dave", skills: ["Ruby", "Rails"] },
];

// Running tests
console.log("Test 1:", findUsersWithoutSkill(users, "JavaScript")); // Expected output: ["Bob", "Dave"]
console.log("Test 2:", findUsersWithoutSkill(users, "Python")); // Expected output: ["Alice", "Charlie", "Dave"]
console.log("Test 3:", findUsersWithoutSkill(users, "Ruby")); // Expected output: ["Alice", "Bob", "Charlie"]
console.log(
  "Test 4 (All users have skill):",
  findUsersWithoutSkill(
    [
      { name: "Alice", skills: ["JavaScript"] },
      { name: "Bob", skills: ["JavaScript"] },
    ],
    "JavaScript"
  )
); // Expected output: []

console.log(
  "Test 5 (No users have skill):",
  findUsersWithoutSkill(
    [
      { name: "Alice", skills: ["Python"] },
      { name: "Bob", skills: ["Django"] },
    ],
    "JavaScript"
  )
); // Expected output: ["Alice", "Bob"]

console.log(
  "Test 6 (Empty user list):",
  findUsersWithoutSkill([], "JavaScript")
); // Expected output: []

function aggregateScoresBySkill(students, skill) {
  return students
    .filter((s) => s.skills.includes(skill))
    .map((s) => s.scores)
    .reduce((total, score) => total + score, 0);
}

module.exports = aggregateScoresBySkill;
