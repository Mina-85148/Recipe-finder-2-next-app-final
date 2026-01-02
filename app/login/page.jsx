"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simulated users stored in localStorage (for demo)
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [
    { email: "demo@sweettreats.com", password: "1234", username: "DemoUser" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials against stored users
    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem(
        "activeUser",
        JSON.stringify({ email: user.email, username: user.username, kitchenItems: [], shoppingList: [] })
      );
      router.push("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <section className="lrbody">
      <main className="auth-container">
        <div className="logo">
          <i className="fa-solid fa-cookie-bite"></i> Sweet Treats
        </div>

        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link href="/register">Register here</Link>
        </p>
      </main>
    </section>
  );
};

export default Login;
