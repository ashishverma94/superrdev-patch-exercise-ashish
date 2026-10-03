export default function SearchBar({ value, onChange, setPage }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
        setPage(1);
      }}
    />
  );
}
