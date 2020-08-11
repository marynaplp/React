//опишите комопнету которая приимает количество товаров в корзине в свойстве  сount и имя пользователя в свойстве userName и отображает текст и отображает текст `${userName}, you added &{count}`

import React from "react";

const CardTitle = ({ userName, count }) => { return <div className="cart-title">{`${userName}, you added ${count} items`}</div>;
};

export default CardTitle;

