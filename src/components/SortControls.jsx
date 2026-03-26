function SortControls({ setSortField, setOrder }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <button onClick={() => { setSortField("name"); setOrder("asc"); }} style={{ marginBottom: "20px" , cursor: "pointer", padding: "8px 16px" }}>
        Name ↑
      </button>

      <button onClick={() => { setSortField("name"); setOrder("desc"); }} style={{ marginBottom: "20px" , cursor: "pointer", padding: "8px 16px" }}>
        Name ↓
      </button>

      <button onClick={() => { setSortField("company"); setOrder("asc"); }} style={{ marginBottom: "20px" , cursor: "pointer", padding: "8px 16px" }}>
        Company ↑
      </button>

      <button onClick={() => { setSortField("company"); setOrder("desc"); }} style={{ marginBottom: "20px" , cursor: "pointer", padding: "8px 16px" }}>
        Company ↓
      </button>
    </div>
  );
}

export default SortControls;