import React, { useReducer } from "react";
// import axios from 'axios'

function ShowDeviceForm() {
  return (
    <div className="container add-user-form">
      <div className="row">
        <div className="col">
          {/* <h4 className="mb-3"> Find and List Devices </h4> */}
          {/* <hr className="mb-4" /> */}
          <form className="needs-validation" novalidate>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label for="state">Options</label>
                <select
                  className="custom-select d-block w-100"
                  id="type"
                  required
                >
                  <option value="">Choose...</option>
                  <option>Description</option>
                  <option>Department</option>
                  <option>Floor</option>
                  <option>User</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid Type.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="firstName">{"Description"}</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  defaultValue={""}
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="state">Options</label>
                <select
                  className="custom-select d-block w-100"
                  id="type"
                  required
                >
                  <option value="">Choose...</option>
                  <option>None</option>
                  <option>Contains</option>
                  <option>is exactly</option>
                  <option>Starts with</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid Type.
                </div>
              </div>
							<div className="col-md-3 mb-3">
                <label for="firstName">{"Description"}</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  defaultValue={""}
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
            </div>
						<hr />
						<div>
                <button className="btn btn-success" type="submit">
                  Add User
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowDeviceForm;
