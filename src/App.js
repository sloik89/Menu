import "./App.css";
import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";
function App() {
  const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState([
    "all",
    ...new Set(data.map((elem) => elem.category)),
  ]);
  const filterItems = (itemName) => {
    switch (itemName) {
      case "breakfast":
        setMenu(data.filter((item) => item.category === itemName));
        break;
      case "lunch":
        setMenu(data.filter((item) => item.category === itemName));
        break;
      case "shakes":
        setMenu(data.filter((item) => item.category === itemName));
        break;
      case "all":
        setMenu(data);
        break;
    }
  };
  console.log(category);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories category={category} filter={filterItems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
