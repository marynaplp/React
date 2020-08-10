// опишите компонету которая принимает обьект пользователя в свойстве userData и отображает данные пользователя.Если данный нет то ничего редерить не нужно
import React, {Component} from "react";

class UserProfile extends Component {
render() {
    if (!this.props.userData){
        return null 
    }
    const {name, location, avatar_url} = this.props.userData

    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={avatar_url}
          className="user__avatar"
        />
          <div class="user__info">
    <span class="user__name">{name}</span>
    <span class="user__location">{location}</span>
          </div>
        </div>
    );
}
}

export default UserProfile;

export default UserProfile