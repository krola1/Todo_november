//filter

export const toggleFilter = (array, filter) => {
  switch (filter) {
    case "active":
      return array.filter((item) => !item.completed);
    case "completed":
      return array.filter((item) => item.completed);
    case "all":
    default:
      return array;
  }
};

//sorting helpers

export const sortAZ = (array) => {
  return [...array].sort((a, b) => a.title.localCompare(b.title));
};
export const sortZA = (array) => {
  return [...array].sort((a, b) => b.title.localCompare(a.title));
};

const sortNewest = (array) => {
  return [...array].sort((a, b) => b.createdAt - a.createdAt);
};

const sortOldest = (array) => {
  return [...array].sort((a, b) => a.createdAt - b.createdAt);
};

//router.

export const sortArray = (array, sortOrder) => {
  switch (sortOrder) {
    case "az":
      return sortAZ(array);
    case "za":
      return sortZA(array);
    case "newest":
      return sortNewest(array);
    case "oldest":
      return sortOldest(array);
    default:
      return array;
  }
};

sortArray(toggleFilter(TodoList, "completed"), "az");
