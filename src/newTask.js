export class NewTask {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = false;
  }

  toggleStatus() {
    this.status = !this.status;
  }
}
