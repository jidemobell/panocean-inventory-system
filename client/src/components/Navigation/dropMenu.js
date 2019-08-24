import React from "react";
import { UserPlus, UserMinus } from "react-feather";


function DropMenu(props) {
  return (
    <div className="users-menu">
      <ul className="nav flex-column">
        {props.menuArray.map(menu => {
          return (
            <li 
            className="nav-item inner-menu-li"
            onClick={props.handleDropClick}
            >
              <a className="nav-link" href="http://fakelink">
                <span className="feather">
                  {menu[1]}
                </span>
                 {menu[0]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropMenu;
