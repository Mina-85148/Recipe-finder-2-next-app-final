"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load existing users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if email already exists
    if (storedUsers.find((u) => u.email === email)) {
      alert("Email already registered!");
      return;
    }

    // Create new user object
    const newUser = { username, email, password };

    // Save user locally
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");
    router.push("/login"); // Navigate to login page
  };

  return (
    <section className="lrbody">
      <main className="auth-container">
        <div className="logo">
          <i className="fa-solid fa-cookie-bite"></i> Sweet Treats
        </div>

        <h1>Create an Account</h1>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link href="/login">Login here</Link>
        </p>
      </main>
    </section>
  );
};

export default Register;
