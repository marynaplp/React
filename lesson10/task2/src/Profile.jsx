// опишите компоненту которая приниамт обьект пользователя в свойстве userData и отрисовует компоненту UserForm
import React from "react";

const Profile = ({userData, handleChange}) =>{
    return (
    <div class="column">
        <UserFrom userData={userData} onhandleChange ={handleChange} />
    </div>
    )
}
    
export default Profile

