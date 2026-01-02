"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    router.push("/dashboard"); // Go to dashboard
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
          />

          <input
            type="password"
            placeholder="Password"
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
