import { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Username: ${username}, Email ${email}`);
  };
  ruturn(
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input
            type=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Enter your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
