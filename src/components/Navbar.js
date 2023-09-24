import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
  let navigate = useNavigate()
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark lilac-bg">
      <div className="container-fluid">
        <a className='navbar-brand' href="#">
            IVATHERM
        </a>
        {/* <Link className="navbar-brand" to="/">
          IVATHERM
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <button className='btn btn-outline-light'>Add an IVATHERM item to your</button> */}
        <Link className="btn btn-outline-light" to="/addItem">
          Add an IVATHERM item to your collection
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
