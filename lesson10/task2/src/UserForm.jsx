// опишите компоненту которая принимает обьект пользователя в свойстве userData и отрисовует поля для редактирования lastName and firstName. UserForm  не должна сама хранить состояния. а должна изменять данные пользователя, который хранится в App

import React, {Componet} from "react";


const UserForm = ({firstName, lastName, handleChange }) =>{
    return (
        <form class="user-form">
        <input type="text" name="firstName" class="user-form__input" value={firstName} />
        <input type="text" name="lastName" class="user-form__input" value={lastName} />
      </form>
    )
}

const UserForm 