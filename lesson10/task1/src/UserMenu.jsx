//опишите комопнету которая принимает обьект пользователя в свойстве  userData   отображает приветсвие и аватар пользователя Если данных нет то ничего рендерить  не нужно 


import React from "react";

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }

  const { name, avatar_url } = userData;// деструктиризация чтобы достать  нужнуж инфу
  return (
    <div className="menu">
      <span className="menu__greeting">{name}</span>
      <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
    </div>
  );
};

export default UserMenu;

