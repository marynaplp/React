// опишите компонету которая принимает  массив товаров в свойстве cardItems и отображает список товаров и total под ним 
import React, { Component } from "react";

class ProductList extends Component {
  render() {

    const total = this.props.cardItems.reduce((acc, item) => acc+ item.price, 0);

    return (
      <div className="products">
        <ul className="products__list">
          {this.props.cardItems.map(({ id, name, price }) => (
            <li key={id} className="products__list-item">
              <span className="products__item-name">{name}</span>
          <span className="products__item-price">{price}</span>
            </li>
          ))}
        </ul>
          <div className="products__total">{ `Total:${total}`}</div>
      </div>
    );
  }
}

export default ProductList;
