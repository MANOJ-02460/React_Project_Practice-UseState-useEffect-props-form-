import React, { useState } from "react";

const PostWithStatus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");      // error message shown to user
  const [created, setCreated] = useState(null); // store response from server

  // Replace with your real endpoint in production
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const handleSubmit = async (e) => {
    e.preventDefault();         // 1) prevent full page reload
    setError("");               // 2) clear previous errors
    setCreated(null);           // 3) clear previous success

    // 4) simple client-side validation
    if (!name.trim() || !email.trim()) {
      setError("Please enter both name and email.");
      return;
    }

    setLoading(true);           // 5) start loading indicator
    try {
      const payload = { name: name.trim(), email: email.trim() };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // convert JS object -> JSON string
      });

      // 6) handle non-2xx responses explicitly
      if (!res.ok) {
        // try to read a helpful message from the server (might be JSON or text)
        let serverMsg = "";
        try {
          const maybeJson = await res.json();
          serverMsg = maybeJson?.message || JSON.stringify(maybeJson);
        } catch {
          serverMsg = await res.text();
        }
        throw new Error(`Server error ${res.status}: ${serverMsg || res.statusText}`);
      }

      // 7) parse response and update UI
      const data = await res.json();
      setCreated(data);         // show created object to user
      setName("");              // clear form
      setEmail("");
    } catch (err) {
      // 8) network errors or our thrown server errors end up here
      setError(err.message || "Something went wrong while creating user.");
    } finally {
      // 9) always hide loading (success or fail)
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "24px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>POST — Add User</h2>

      <form onSubmit={handleSubmit} aria-busy={loading}>
        <div style={{ marginBottom: 8 }}>
          <label>
            Name<br />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              placeholder="Enter name"
              style={{ width: "100%", padding: 8 }}
            />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>
            Email<br />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              placeholder="Enter email"
              type="email"
              style={{ width: "100%", padding: 8 }}
            />
          </label>
        </div>

        <button type="submit" disabled={loading} style={{ padding: "8px 12px" }}>
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>

      {/* error (role=alert for accessibility) */}
      {error && (
        <p role="alert" style={{ color: "crimson", marginTop: 12 }}>
          {error}
        </p>
      )}

      {/* success/result */}
      {created && (
        <div style={{ marginTop: 12 }}>
          <strong>Created user:</strong>
          <pre style={{ background: "#f4f4f4", padding: 8, overflowX: "auto" }}>
            {JSON.stringify(created, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PostWithStatus;
