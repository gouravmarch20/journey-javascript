// task scheduling

const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["f"] },
  { id: "f", dependencies: [] },
]
const cyclicSchedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: ["d"] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["d"] },
  { id: "f", dependencies: [] },
]

const totalTasks = schedules.length
let totalTasksExecuted = 0
let currentTask = 0

const removeTaskFromDeps = (id) => {
  schedules.forEach((task) => {
    const index = task.dependencies.indexOf(id)
    if (index !== -1) task.dependencies.splice(index, 1)
  })
}

const executeTasks = (schedules) => {
  while (totalTasksExecuted < totalTasks) {
    const task = schedules[currentTask]
    if (!task.dependencies.length && !task.executed) {
      console.log(task.id)
      task.executed = true
      totalTasksExecuted += 1
      removeTaskFromDeps(task.id)
    } else if (!task.visited) task.visited = 1
    else if (task.visited > totalTasks) {
      console.log("Cycle formed")
      break
    } else task.visited += 1

    if (currentTask === totalTasks - 1) currentTask = 0
    else currentTask += 1
  }
}
executeTasks(schedules)
console.log("----")
executeTasks(cyclicSchedules)
