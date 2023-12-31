//  who mark is less than 60 increase there mark by 20 , return total marks greater than 60 sum
const students = [
  { name: 'Piyush', rollNumber: 31, marks: 8 },
  { name: 'Jenny', rollNumber: 15, marks: 69 },
  { name: 'Kaushal', rollNumber: 16, marks: 35 },
  { name: 'Dilpreet', rollNumber: 7, marks: 55 }
]

const result = students
  .map(student => {
    if (student.marks < 60) {
      student.marks = student.marks + 20
    }
    return student
  })
  .filter(student => student.marks > 60)
  .reduce((acc, student) => acc + student.marks, 0)
console.log(result)
