import { Priority, PriorityLevels } from "./priority";
import { NewTask } from "./newTask";
import { NewProject } from "./newProject";

const newTask1 = new NewTask(
  "get my lunch",
  "eat lunch",
  "10 / 5 / 2022",
  "high",
  new Priority(PriorityLevels.LOW)
);

newTask1.toggleStatus();
newTask1.toggleStatus();

console.log(newTask1, newTask1.status);

const newProject1 = NewProject("house");
newProject1.addTask(newTask1);

console.log(newProject1.getNewList());

newProject1.deleteTask(newTask1);

console.log(newProject1.getNewList());
