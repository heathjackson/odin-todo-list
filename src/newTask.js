class PriorityLevels {
  static LOW = 0;
  static MEDIUM = 1;
  static HIGH = 2;
}

Object.freeze(PriorityLevels);

class NewTask {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}

class Priority {
  constructor(priority) {
    this.priority = priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(level) {
    this._priority = level;
  }
}

class CompleteStatus {
  constructor() {
    this.status = false;
  }

  get status() {
    return this.status;
  }

  toggleStatus() {
    this.status = !this.status;
  }
}
