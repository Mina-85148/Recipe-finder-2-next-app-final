"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [kitchenItem, setKitchenItem] = useState("");
  const [shoppingItem, setShoppingItem] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("activeUser"));
    if (!storedUser) {
      alert("Please login first!");
      router.push("/login");
      return;
    }
    setUser(storedUser);
  }, [router]);

  const saveUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("activeUser", JSON.stringify(updatedUser));
  };

  const addKitchenItem = () => {
    if (!kitchenItem.trim()) return;
    const updated = [...user.kitchenItems, kitchenItem];
    saveUser({ ...user, kitchenItems: updated });
    setKitchenItem("");
  };

  const addShoppingItem = () => {
    if (!shoppingItem.trim()) return;
    const updated = [...user.shoppingList, shoppingItem];
    saveUser({ ...user, shoppingList: updated });
    setShoppingItem("");
  };

  const removeKitchenItem = (index) => {
    const updated = user.kitchenItems.filter((_, i) => i !== index);
    saveUser({ ...user, kitchenItems: updated });
  };

  const removeShoppingItem = (index) => {
    const updated = user.shoppingList.filter((_, i) => i !== index);
    saveUser({ ...user, shoppingList: updated });
  };

  const handleLogout = () => {
    localStorage.removeItem("activeUser");
    router.push("/login");
  };

  if (!user) return <h2>Loading dashboard...</h2>;

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
            {user.kitchenItems.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <button onClick={() => removeKitchenItem(i)}>x</button>
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
            {user.shoppingList.map((item, i) => (
              <li key={i}>
                {item}{" "}
                <button onClick={() => removeShoppingItem(i)}>x</button>
              </li>
            ))}
          </ul>
        </section>

        {/* 🌸 Seasonal Ingredients */}
        <section>
          <h2>🌸 Seasonal Ingredients</h2>
          <p>View list of ingredients available this season/month — coming soon!</p>
        </section>

        <section id="suggestSection" className="suggest-section">
        <h2>📅 Meal Planner Tool</h2>
        <h3>🍳 Aj Kia Pakaey?</h3>
        <button >Suggest Recipe</button>
        </section>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
};

export default Dashboard;
