import React from 'react'

function UserForm(){
    return(
        <div className="container add-user-form">      
        <div className="row">
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Add a new user | Assign to Device </h4>
              <hr  className="mb-4" />
             <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="firstName">First name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label for="lastName">Last name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>   
              <div className="col-md-4 mb-3">
                  <label for="state">Type</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid Type.
                  </div>
                </div>       
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label for="country">Location</label>
                  <select className="custom-select d-block w-100" id="location" required >
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid location.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <label for="state">Floor</label>
                  <select className="custom-select d-block w-100" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid Floor.
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip">ID</label>
                  <input type="text" className="form-control" id="zip" placeholder="" required />
                  <div className="invalid-feedback">
                    ID required.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <button className="btn btn-secondary" type="submit">Add User</button>
            </form>
          </div>
        </div>
        </div>
    )
}

export default UserForm;