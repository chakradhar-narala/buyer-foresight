import { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  // filter + sort
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortField) return 0;

      let valA = sortField === "company" ? a.company.name : a.name;
      let valB = sortField === "company" ? b.company.name : b.name;

      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

  return (
    <div style={{ padding: "20px", textAlign: "center" , minHeight: "100vh"}}>
      <h1>User Directory</h1>

      <SearchBar setSearch={setSearch} />
      <SortControls setSortField={setSortField} setOrder={setOrder} />

      <UserTable users={filteredUsers} />
    </div>
  );
}

export default Dashboard;