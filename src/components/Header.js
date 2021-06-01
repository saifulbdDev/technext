/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/techenxt-logo.png'

function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true)

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)
    const [ismenu, setIsmenu] = useState(true)

    const handletoggle = () => setIsmenu(!ismenu)
    return (
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
                        aria-expanded={!isNavCollapsed}
                        aria-label="Toggle navigation"
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={handletoggle}
                                    aria-expanded="false"
                                >
                                    My profile
                                </a>
                                <ul
                                    className={`${ismenu ? 'dropdown-menu' : 'dropdown-menu show'}`}
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link
                                            className="nav-link active"
                                            aria-current="page"
                                            to="/profile"
                                        >
                                            My profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="nav-link active"
                                            aria-current="page"
                                            to="/profile"
                                        >
                                            My profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            className="nav-link active"
                                            aria-current="page"
                                            to="/profile"
                                        >
                                            My profile
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
