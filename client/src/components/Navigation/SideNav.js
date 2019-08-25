import React, { useState } from "react";
import {
  Home,
  HardDrive,
  Users,
  BarChart2,
  UserPlus,
  UserMinus
} from "react-feather";

import DropMenu from "./dropMenu";

function SideNav(props) {
  const [dropUserMenu, setDropUserMenu] = useState(false);
  const [dropDeviceMenu, setDropDeviceMenu] = useState(false);
  const [dropReportMenu, setDropReportMenu] = useState(false);

  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item" onClick={() => props.displayComponent("")}>
            <div className="nav-link">
              <span className="feather">
                <Home size={20} />
              </span>
              Dashboard
            </div>
          </li>
          <li
            className="nav-item drop-menu"
            onClick={() => {
              !dropUserMenu ? setDropUserMenu(true) : setDropUserMenu(false);
            }}
          >
            <div className="nav-link">
              <span className="feather">
                <Users size={20} />
              </span>
              Users
            </div>
          </li>
          {dropUserMenu && (
            <DropMenu
              menuArray={[
                ["Add User", <UserPlus size={15} />],
                ["Remove User", <UserMinus size={15} />]
              ]}
              handleDropClick={val => props.displayComponent(val)}
            />
          )}
          <li
            className="nav-item drop-menu"
            onClick={() => {
              !dropDeviceMenu
                ? setDropDeviceMenu(true)
                : setDropDeviceMenu(false);
            }}
          >
            <div className="nav-link ">
              <span className="feather">
                <HardDrive size={20} />
              </span>
              Devices
            </div>
          </li>
          {dropDeviceMenu && (
            <DropMenu
              menuArray={[["Add Device"], ["Remove Device"], ["Show Device"]]}
            />
          )}
          <li
            className="nav-item drop-menu"
            onClick={() =>
              !dropReportMenu
                ? setDropReportMenu(true)
                : setDropReportMenu(false)
            }
          >
            <div className="nav-link">
              <span className="feather">
                <BarChart2 />
              </span>
              Reports
            </div>
          </li>
          {dropReportMenu && <DropMenu menuArray={[["Generate Report"]]} />}
        </ul>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="d-flex align-items-center text-muted">
            <span data-feather="plus-circle" />
          </a>
        </h6>
      </div>
    </nav>
  );
}

export default SideNav;
