/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/techenxt-logo.png'

const Header = () => (
    <header className="header">
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="40" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/profile">
                                My profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
