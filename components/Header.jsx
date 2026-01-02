"use client"; // ✅ must be at the top

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // to mark active link

  return (
    <header>
      <div className="container nav">
        <div className="logo">
          <i className="fa-solid fa-cookie-bite"></i> Sweet Treats
        </div>

        <nav className="nav-links">
          <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
          <Link href="/services" className={pathname === "/services" ? "active" : ""}>Services</Link>

          <div className="dropdown">
            <Link href="#">Categories ▾</Link>
            <div className="dropdown-content">
              <Link href="/popular">Most Popular</Link>
              <Link href="/quick">Quick & Easy</Link>
              <Link href="/two-ingredients">Two-Ingredient Desserts</Link>
              <Link href="/classic">Classic Desserts</Link>
            </div>
          </div>

          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
          <Link href="/login" className={pathname === "/login" ? "active" : ""}>Login</Link>
          <Link href="/register" className={pathname === "/register" ? "active" : ""}>Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
