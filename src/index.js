import { newTask } from "./newTask";
import { newProject } from "./newProject";

const newTask1 = newTask("get my lunch", "eat lunch", "10 / 5 / 2022", "high");
newTask1.toggleCompleteStaus();

console.log(newTask1, newTask1.getCompleteStatus());

const newProject1 = newProject("house");
newProject1.addTask(newTask1);

console.log(newProject1.getNewList());

newProject1.deleteTask(newTask1);

console.log(newProject1.getNewList());
