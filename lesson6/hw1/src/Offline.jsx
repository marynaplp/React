// describe componet which describes text Offline and button Reconnect
import React from "react";

const Offline = () => {
  return (
    <div class="status">
      <span class="status__text">Offline</span>
      <button class="status__btn">Reconnect</button>
    </div>
  );
};

export default Offline;