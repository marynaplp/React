// опишите компоненту которая принимает имя пользователя в свойстве userName и хранить состоянии массив товаров App.  ShoppingCard должна отрисовать CardTitle and ProductList
import React,{ Component } from "react";
import CardTitle from "./CardTitle.jsx";
import ProductList from "./ProductList.jsx"


class ShoppingCard extends Component {
state = {
    cardItems: [
        {
            id: "1",
            name: "iPhone 11",
            price: 999,
        },
        {
            id: "2",
            name: "iPad Pro",
            price: 799,

        }
    ]
}

render() {
    const count = this.state.cardItems.length;
    return(
           <div className="column">
                <CardTitle userName={this.props.userName} count={count} />
                <ProductList cartItems={this.state.cartItems} />
            </div>
    )
}
}
export default ShoppingCard