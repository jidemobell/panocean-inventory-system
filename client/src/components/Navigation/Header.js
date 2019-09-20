import React from "react";

import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://fakelink">
        Panocean
      </a>
			{/* 
			<input
          className="form-control form-control-dark w-100 searchbox"
          type="text"
          placeholder="Search"
          aria-label="Search"
				/> 
				*/}
      <div className="search-wrapper">
        {/* <FontAwesomeIcon icon="search" id="search" /> */}
        <input
          className="searchbox"
          type="text"
          placeholder="Search"
          aria-label="Search"
				/> 
      </div>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="http://fakelink">
            Sign out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
