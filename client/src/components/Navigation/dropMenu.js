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
            // onClick={
            //   () => {
            //     if(menu[0].split(" ").includes("User")){
            //       if(menu[0].split(" ")[0] === "add"){
            //         props.handleDropClick("add")
            //       }
            //     }
            //   }
            // }
            >
              <div className="nav-link">
                <span className="feather">
                  {menu[1]}
                </span>
                 {menu[0]}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropMenu;
