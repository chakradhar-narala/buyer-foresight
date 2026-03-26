function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by name or email"
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: "8px", width: "250px", marginBottom: "10px" }}
    />
  );
}

export default SearchBar;