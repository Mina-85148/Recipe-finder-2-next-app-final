"use client";

import Link from "next/link";

const QuickEasyRecipes = () => {
  return (
    <main className="container recipe-list">
      <h1>Quick and Easy Recipes</h1>

      <div className="grid" id="recipeList">
        <div className="card" >
          <img src="/image/mugcake.jpg" alt="Mug Cake" />
          <h3>Chocolate Mug Cake</h3>
          <p>Ready in minutes, rich and satisfying.</p>
        </div>

        <div className="card">
          <img src="/image/fb.webp" alt="Brownies" />
          <h3>Fudgy Brownies</h3>
          <p>Simple one-bowl brownies for any craving.</p>
        </div>

        <div className="card" >
          <img
            src="/image/Vanilla_Bean_Ice_Cream_Sandwich.jpg"
            alt="Ice Cream Sandwich"
          />
          <h3>Ice Cream Sandwiches</h3>
          <p>No-bake, fun, and kid-friendly treats.</p>
        </div>

        <div className="card" >
          <img src="/image/tart.jpg" alt="Fruit Tart" />
          <h3>Mini Fruit Tarts</h3>
          <p>Fresh, colorful, and easy to assemble.</p>
        </div>

        <div className="card" >
          <img src="/image/Mini Kinder.jpg" alt="Mini Kinder" />
          <h3>Decadent Mini Kinder Bueno</h3>
          <p>Small, indulgent dessert or treat inspired by Kinder.</p>
        </div>

        <div className="card">
          <img src="/image/Croissants.jpg" alt="Croissants" />
          <h3>Easy Chocolate Croissants</h3>
          <p>Simple, flaky chocolate pastry treats.</p>
        </div>
      </div>
    </main>
  );
};

export default QuickEasyRecipes;
