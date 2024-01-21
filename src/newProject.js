export const newProject = (title) => {
  let newList = [];
  const addTask = (task) => {
    newList.push(task);
  };
  const deleteTask = (task) => {
    newList = newList.filter((e) => e !== task);
  };

  const getNewList = () => newList;

  return { title, addTask, deleteTask, getNewList };
};
