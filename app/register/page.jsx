"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Simply navigate to login page
    alert("Registration successful!");
    router.push("/login");
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

          />

          <input
            type="email"
            placeholder="Email"
      
          />

          <input
            type="password"
            placeholder="Password"

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
