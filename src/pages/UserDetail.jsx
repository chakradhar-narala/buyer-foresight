import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
        <button onClick={() => navigate("/")} style={{ marginBottom: "20px" , cursor: "pointer", padding: "8px 16px" }}>
            ← Back to Dashboard
        </button>
        <h2>{user.name}</h2>

        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>

        <h3>Address</h3>
        <p>{user.address.street}, {user.address.city}</p>

        <h3>Company</h3>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
    </div>
  );
}

export default UserDetail;