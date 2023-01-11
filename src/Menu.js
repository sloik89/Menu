import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className="menu-item">
            <div className="imgage-container">
              <img src={img} alt="" className="photo" />
            </div>

            <div className="item-info">
              <header>
                <h3 className="item-header">{title}</h3>
                <h4 className="price">{price} $</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
