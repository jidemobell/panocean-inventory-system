import React from 'react'

function UserForm(){
    return(
        <div className="container">      
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>   
            <form className="card p-2">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Promo code" />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-secondary">Redeem</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
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
              <div className="mb-3">
                <label for="email">Email <span className="text-muted">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
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
              <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
        </div>
    )
}

export default UserForm;