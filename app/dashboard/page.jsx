"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  // Static dummy user data
  const [user] = useState({ username: "DemoUser" });

  // State for kitchen and shopping items (not persisted)
  const [kitchenItems, setKitchenItems] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [kitchenItem, setKitchenItem] = useState("");
  const [shoppingItem, setShoppingItem] = useState("");

  const addKitchenItem = () => {
    if (!kitchenItem.trim()) return;
    setKitchenItems([...kitchenItems, kitchenItem]);
    setKitchenItem("");
  };

  const addShoppingItem = () => {
    if (!shoppingItem.trim()) return;
    setShoppingList([...shoppingList, shoppingItem]);
    setShoppingItem("");
  };

  const removeKitchenItem = (index) => {
    setKitchenItems(kitchenItems.filter((_, i) => i !== index));
  };

  const removeShoppingItem = (index) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const handleLogout = () => {
    router.push("/login"); // Simply redirect to login
  };

  return (
    <main className="dashboard">
      <h1>
        Welcome, <span>{user.username}</span>!
      </h1>

      {/* 🍴 Kitchen Items */}
      <section>
        <h2>🍴 Kitchen Items</h2>
        <input
          type="text"
          placeholder="Add kitchen item..."
          value={kitchenItem}
          onChange={(e) => setKitchenItem(e.target.value)}
        />
        <button onClick={addKitchenItem}>Add</button>
        <ul>
          {kitchenItems.map((item, i) => (
            <li key={i}>
              {item} <button onClick={() => removeKitchenItem(i)}>x</button>
            </li>
          ))}
        </ul>
      </section>

      {/* 🛒 Shopping List */}
      <section>
        <h2>🛒 Shopping List</h2>
        <input
          type="text"
          placeholder="Add shopping item..."
          value={shoppingItem}
          onChange={(e) => setShoppingItem(e.target.value)}
        />
        <button onClick={addShoppingItem}>Add</button>
        <ul>
          {shoppingList.map((item, i) => (
            <li key={i}>
              {item} <button onClick={() => removeShoppingItem(i)}>x</button>
            </li>
          ))}
        </ul>
      </section>

      {/* 🌸 Seasonal Ingredients */}
      <section>
        <h2>🌸 Seasonal Ingredients</h2>
        <p>View list of ingredients available this season/month — coming soon!</p>
      </section>

      {/* 📅 Meal Planner Tool */}
      <section id="suggestSection" className="suggest-section">
        <h2>📅 Meal Planner Tool</h2>
        <h3>🍳 Aj Kia Pakaey?</h3>
        <button>Suggest Recipe</button>
      </section>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
};

export default Dashboard;
