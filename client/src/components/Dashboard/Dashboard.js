import React from "react";

import DataChart from "../Charts/Line";
import DeviceTable from "../Table/Devices";
import SideNav from "../Navigation/SideNav";
import Header from "../Navigation/Header";
import UserForm from '../Forms/UserForm';

import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <span data-feather="calendar" />
                  This week
                </button>
              </div>
            </div>
            {/* <DataChart /> */}
             
            <h2>Recently Assigned</h2>
            <DeviceTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
