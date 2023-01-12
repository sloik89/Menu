import React from "react";

const Categories = ({ category, filter }) => {
  return (
    <ul className="categories">
      {category.map((item, idx) => {
        return (
          <li key={idx}>
            <button onClick={() => filter(item)}>{item}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
