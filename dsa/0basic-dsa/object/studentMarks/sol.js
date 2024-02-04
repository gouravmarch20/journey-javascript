const studentDetails = [
  {
    roll: "1",
    name: "Rohan Singh",
    maths: 86,
    science: 90,
    english: 75,
    computer: 85,
  },
  {
    roll: "2",
    name: "Ritvik Patel",
    maths: 27,
    science: 30,
    english: 35,
    computer: 30,
  },
  {
    roll: "3",
    name: "Neha Maurya",
    maths: 75,
    science: 69,
    english: 40,
    computer: 75,
  },
  {
    roll: "4",
    name: "Mohit Verma",
    maths: 21,
    science: 31,
    english: 45,
    computer: 40,
  },
  {
    roll: "5",
    name: "Karan Trivedi",
    maths: 70,
    science: 80,
    english: 35,
    computer: 60,
  },
]

const getTotalM = (studentDetail) => {
  const total =
    studentDetail.computer +
    studentDetail.english +
    studentDetail.science +
    studentDetail.maths
  return total
}
const getGrade = (mark) => {
  const totalMarkPaper = 400
  const percentage = Math.floor((mark * 100) / totalMarkPaper)

  if (percentage >= 75) {
    return "A"
  } else if (percentage >= 60) {
    return "B"
  } else if (percentage >= 35) {
    return "C"
  } else {
    return "D"
  }
}

const f1 = (studentDetails) => {
  const ans = studentDetails.map((studentDetail) => {
    const mark = getTotalM(studentDetail)
    const grade = getGrade(mark)

    return { ...studentDetail, totalMark: mark, grade }
  })
  return ans
}
const f2 = (cusObj) => {
  let maxi = 0
  let mini = 400
  let maxiStudent = {}
  let miniStudent = {}
    cusObj.forEach((student) => {
    if(maxi < student.totalMark){
        maxi = student.totalMark
        maxiStudent = student
    }

    if (mini > student.totalMark) {
        mini = student.totalMark
        miniStudent = student
    }
  })
  return {maxiStudent , miniStudent}

}

const cusObj = f1(studentDetails)

for (let val of cusObj) {
    console.log(val.name , " " , val.grade, "-" , val.totalMark);
    
}

const {maxiStudent , miniStudent } = f2(cusObj)
//sol2::
console.log(`student max no name  ${maxiStudent.name} total mark  ${maxiStudent.totalMark}  `);
console.log(`student mini no name  ${miniStudent.name} total mark  ${miniStudent.totalMark}  `);
