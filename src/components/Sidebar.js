/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => (
    <aside>
        <ul className="nav flex-column">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Active
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                    Disabled
                </a>
            </li>
        </ul>
    </aside>
)

export default Header
