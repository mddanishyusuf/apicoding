import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Navbar, Nav, Modal, Button, Form } from 'react-bootstrap'

import '../styles/header.scss'

const Header = ({ siteTitle }) => {
    const [navAdjust, setNavAdjust] = useState('normal')

    return (
        <>
            <header>
                <div className="header-navbar">
                    <div className="nav-menu">
                        <Navbar.Brand>
                            <Link to="/">
                                <h2>{siteTitle}</h2>
                            </Link>
                            <small>hacks & tricks by <a href="https://twitter.com/mddanishyusuf" target="_blank">@mddanishyusuf</a></small>
                        </Navbar.Brand>
                    </div>
                </div>
            </header>
        </>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
