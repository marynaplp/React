// опишите компонету которая принимает обьект пользователя в свойстве userData и отображает данные пользователя.Если данный нет то ничего редерить не нужно
import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export default BoilingVerdict