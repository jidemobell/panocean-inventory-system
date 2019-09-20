import React, {  useReducer } from "react";
// import axios from 'axios'





function  ShowDeviceForm() {


  return (
    <div className="container add-user-form">
      <div className="row">
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Add a new user | Assign to Device </h4>
          <hr className="mb-4" />
          <form
            className="needs-validation"
            novalidate
          >
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  defaultValue={''}
                  required
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  defaultValue={''}
                  required
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label for="state">Type</label>
              <select
                className="custom-select d-block w-100"
                id="type"
                required
              >
                <option value="">Choose...</option>
                <option>Intern</option>
                <option>Visitor</option>
                <option>Staff</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid Type.
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 mb-3">
                <label for="country">Location</label>
                <select
                  className="custom-select d-block w-100"
                  id="location"
                  required
                >
                  <option value="">Choose...</option>
                  <option value="hq">HQ</option>
                  <option value="operations base">Operations Base</option>
                  <option value="gas plant">Gas Plant</option>
                  <option value="agbor">PSC Flow Station</option>
                  <option value="nepl-hq">NEPL HQ</option>
                  <option value="awoba">NEPL AWOBA</option>
                  <option value="ekulama">NEPL EKULAMA</option>
                  <option value="portharcourt">NEPL PH</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid location.
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <label for="state">Floor</label>
                <select
                  className="custom-select d-block w-100"
                  id="floor"
                  required
                >
                  <option value="">Choose...</option>
                  {/* {floorArray.map((val, i) => {
                    return <option value={String(i + 1)} key={`select-${i}`}>{val}</option>;
                  })} */}
                </select>
                <div className="invalid-feedback">
                  Please provide a valid Floor.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label for="staff-number">ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="staff-number"
                  placeholder="STAFF-ID"
                  defaultValue={''}
                  required
                />
                <div className="invalid-feedback">ID required.</div>
              </div>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-secondary" type="submit">
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShowDeviceForm;
