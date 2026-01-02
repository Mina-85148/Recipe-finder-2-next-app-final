"use client";

import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>🍰 Welcome to Sweet Treats</h1>
          <p>
            Discover delicious desserts, quick recipes, and custom cakes made
            with love.
          </p>
          <Link href="/popular" className="hero-btn">
            Explore Recipes
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <main className="container">
        <section className="features">
          <div className="feature-card">
            <Image src="/image/cc.jpg" alt="Most Popular" width={300} height={200} />
            <h2>
              <Link href="/popular">Most Popular</Link>
            </h2>
            <p>Our readers’ all-time favorite desserts you can’t miss.</p>
          </div>

          <div className="feature-card">
            <Image src="/image/fb.webp" alt="Quick and Easy" width={300} height={200} />
            <h2>
              <Link href="/quick">Quick & Easy</Link>
            </h2>
            <p>Desserts ready in under 30 minutes for instant cravings.</p>
          </div>

          <div className="feature-card">
            <Image src="/image/nutella-cake.jpg" alt="Two ingredients" width={300} height={200} />
            <h2>
              <Link href="/two-ingredients">Two Ingredients</Link>
            </h2>
            <p>Minimal ingredients, maximum taste — whip up magic fast!</p>
          </div>
        </section>
      </main>

      {/* Quick Navigation */}
      <section className="home-quick-links">
        <h2>Quick Navigation</h2>
        <div className="quick-links-container">
          <div className="quick-link-card">
            <Link href="/about" className="home-btn">About Us</Link>
          </div>
          <div className="quick-link-card">
            <Link href="/services" className="home-btn">Our Services</Link>
          </div>
          <div className="quick-link-card">
            <Link href="/contact" className="home-btn">Contact Us</Link>
          </div>
          <div className="quick-link-card">
            <Link href="/dashboard" className="home-btn">Dashboard</Link>
          </div>
        </div>
      </section>

      {/* Summaries */}
      <section className="home-summaries">
        <h2>Short Overview</h2>
        <div className="summary-card">
          <h3>Our Services</h3>
          <p>
            Create your account, access personalized dashboards, save favorite
            recipes, plan meals, and generate shopping lists easily.
          </p>
        </div>

        <div className="summary-card">
          <h3>About Sweet Treats</h3>
          <p>
            A dessert-focused website making life sweeter with easy, indulgent
            recipes for beginners and pros alike.
          </p>
        </div>

        <div className="summary-card">
          <h3>Contact Us</h3>
          <p>
            Reach out via email, phone, or send your queries through our contact
            form.
          </p>
        </div>

        <div className="summary-card">
          <h3>Dashboard Features</h3>
          <p>
            Manage kitchen items, shopping lists, meal planner, seasonal
            ingredients, and recipe suggestions.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <h2>Subscribe to Sweet Treats Updates 🍓</h2>
        <p>
          Get weekly dessert inspiration, seasonal recipes, and baking tips
          straight to your inbox.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}

export default Home;
