/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Footer() {
    const year = new Date()

    return (
        <div className="footer">
            <span>Follow me on github </span>
            <small>&copy; {year.getFullYear()} Lean Innovation Group</small>
        </div>
    )
}

export default Footer
