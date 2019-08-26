import React, { useReducer } from "react";

import DataChart from "../Charts/Line";
import DeviceTable from "../Table/Devices";
import SideNav from "../Navigation/SideNav";
import Header from "../Navigation/Header";
import UserForm from "../Forms/UserForm";

import "./Dashboard.css";

const initialState = { mainTitle: "DashBoard", mainComponent: <DataChart /> };

/**
 * action to be dispatched at click of 
 * sidenav dropdown items
 * payload is a component to be displayed
 * onClick of this dropdown item
 */
function displayComponent(data) {
  switch (data) {
    case "Add":
      return {
        type: "SHOW_USER_FORM",
        payload: <UserForm />
      };

    case "":
      return {
        type: "SHOW_CHART",
        payload: <DataChart />
      };
    default:
      break;
  }
}

// reducer function passed to useReduce
function reducer(state, action) {
  switch (action.type) {
    case "SHOW_USER_FORM":
      return { mainTitle: "Add User", mainComponent: action.payload };
    case "SHOW_CHART":
      return { mainTitle: "Dashboard", mainComponent: action.payload };

    default:
      return state;
  }
}



function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideNav displayComponent={data => dispatch(displayComponent(data))} />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">{state.mainTitle}</h1>
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
            {state.mainComponent}
            <hr style={{ marginInline: '20px' }} />
            <h2>Recently Assigned</h2>
            <DeviceTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
