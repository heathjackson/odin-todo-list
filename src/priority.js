export class PriorityLevels {
  static LOW = 0;
  static MEDIUM = 1;
  static HIGH = 2;
}

Object.freeze(PriorityLevels);

export class Priority {
  constructor(priority) {
    this.priority = priority;
  }

  priority(level) {
    this.priority = level;
  }
}
