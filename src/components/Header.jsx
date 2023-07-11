import React from 'react'
import { Link } from 'react-router-dom'
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container-fluid">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="#"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            ></Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="nav-link px-2 text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/products" className="nav-link px-2 text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  About
                </Link>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/cart">
                <button className="btn btn-primary">
                  <BiCart />
                </button>
              </Link>
              <Link to="/register" type="button" className="btn btn-warning">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header