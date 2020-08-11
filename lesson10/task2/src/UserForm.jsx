// опишите компоненту которая принимает обьект пользователя в свойстве userData и отрисовует поля для редактирования lastName and firstName. UserForm  не должна сама хранить состояния. а должна изменять данные пользователя, который хранится в App

import React from "react";

const UserForm = ({ firstName, lastName, handleChange }) => {
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;