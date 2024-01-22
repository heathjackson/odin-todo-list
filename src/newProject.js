class NewProject {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask = (task) => {
    this.tasks.push(task);
  };

  deleteTask = (task) => {
    this.tasks = this.tasks.filter((e) => e !== task);
  };

  get allTasks() {
    return this.tasks;
  }
}

export class Projects {
  constructor() {
    this.projects = [];
  }

  newProject(title) {
    let p = new NewProject(title);
    this.projects.push(p);
    return p;
  }

  deleteProject = (project) => {
    this.projects = this.projects.filter((e) => e !== project);
  };

  get allProjects() {
    return this.projects;
  }
}
