import { SORT_ORDERS, FILTER } from "../utils/filterConfig";
export default function TodoFilters({
  filter,
  setFilter,
  sortOrder,
  setSortOrder,
}) {
  return (
    <>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value={FILTER.ACTIVE}>Uferdige</option>
        <option value={FILTER.COMPLETED}>Fullførte</option>
        <option value={FILTER.ALL}>Alle</option>
      </select>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value={SORT_ORDERS.AZ}>A-Å</option>
        <option value={SORT_ORDERS.ZA}>Å-A</option>
        <option value={SORT_ORDERS.NEW_OLD}>Nyeste først</option>
        <option value={SORT_ORDERS.OLD_NEW}>Eldste først</option>
      </select>
    </>
  );
}
