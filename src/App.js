import "./App.css";
import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data";
function App() {
  const [menu, setMenu] = useState(data);
  console.log(menu);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
