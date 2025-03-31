import { Task } from "../models/task";
import { BinaryHeap } from "./binary-heap";

export class TaskManager {
  private currentIndex = 0;
  private tasks: BinaryHeap<Task>;

  constructor() {
    this.tasks = new BinaryHeap<Task>((a, b) => {
      if (a.priority === b.priority) {
        return b.index - a.index; // highest order
      }

      return a.priority - b.priority; // priority >
    });
  }

  addTask(name: string, priority: number, executionTime: number): void {
    this.tasks.add({ name, priority, executionTime, index: this.currentIndex++ });
  }

  removeHighestPriorityTask(): Task | null {
    return this.tasks.extractRoot();
  }

  calculateTotalExecutionTime(): number {
    return this.tasks.getAllElements().reduce((total, task) => total + task.executionTime, 0);
  }
}
