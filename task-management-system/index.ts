  import { TaskManager } from "./services/task-manager";

  const main = async () => {
    const taskManager = new TaskManager();
    taskManager.addTask("Task 1", 3, 10);
    taskManager.addTask("Task 2", 1, 5);
    taskManager.addTask("Task 3", 2, 8);

    console.log(taskManager.removeHighestPriorityTask()); // { name: "Task 1", priority: 3, executionTime: 10 }
    console.log(taskManager.calculateTotalExecutionTime()); // 13
  }

  main();
