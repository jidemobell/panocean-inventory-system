import React from "react";

function DropMenu({handleDropClick, menuArray}) {
  return (
    <div className="users-menu">
      <ul className="nav flex-column">
        {menuArray.map(menu => {
          return (
            <li 
            className="nav-item inner-menu-li"
            // onClick={props.handleDropClick}
            onClick={
              () => {
                if(menu[0].split(" ").includes("User")){
                  handleDropClick(menu[0].split(" ")[0])
                }
                if(menu[0].split(" ").includes("Device")){
                  console.log(menu[0])
                  handleDropClick(menu[0])
								}
								if(menu[0].split(" ").includes("show")){
                  console.log(menu[0])
                  handleDropClick(menu[0])
                }
              }
            }
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
