import { FILTER, SORT_ORDERS } from "./filterConfig";

//filter

export const toggleFilter = (array, filter) => {
  switch (filter) {
    case FILTER.ACTIVE:
      return array.filter((item) => !item.completed);
    case FILTER.COMPLETED:
      return array.filter((item) => item.completed);
    case FILTER.ALL:
    default:
      return array;
  }
};

//sorting helpers

export const sortAZ = (array) => {
  return [...array].sort((a, b) => a.title.localeCompare(b.title));
};
export const sortZA = (array) => {
  return [...array].sort((a, b) => b.title.localeCompare(a.title));
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
    case SORT_ORDERS.AZ:
      return sortAZ(array);
    case SORT_ORDERS.ZA:
      return sortZA(array);
    case SORT_ORDERS.NEW_OLD:
      return sortNewest(array);
    case SORT_ORDERS.OLD_NEW:
      return sortOldest(array);
    default:
      return array;
  }
};
